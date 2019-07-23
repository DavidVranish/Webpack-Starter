const _ = require('lodash');

let loaderHandler = function (arg_obj_value, arg_src_value, arg_key, arg_object, arg_source, arg_stack) {
    if(arg_key == "rules" 
        && _.isArray(arg_obj_value) 
        && _.isArray(arg_src_value)
    ) {
        let new_array = _.map(arg_obj_value, (tmp_item) => {
            if (_.isPlainObject(tmp_item)
                && _.has(tmp_item, 'loader')
            ) {
                let loc_src_item = _.find(arg_src_value, (tmp_src_item) => {
                    return (tmp_src_item.loader == tmp_item.loader); 
                });

                if (!_.isNil(loc_src_item)) {
                    return _.merge(tmp_item, loc_src_item);
                } else {
                    return tmp_item;
                }
            } else {
                return tmp_item;
            }
        });


        let filtered_array = _.filter(arg_src_value, (tmp_item) => {
            if (_.isPlainObject(tmp_item)
                && _.has(tmp_item, 'loader')
            ) {
                let loc_obj_index = _.findIndex(arg_obj_value, (tmp_obj_item) => {
                    return (tmp_obj_item.loader == tmp_item.loader); 
                });

                return (loc_obj_index === -1);

            } else {
                return true;

            }
        });

        return _.concat(new_array, filtered_array);
    } else if (_.isArray(arg_obj_value) 
        && _.isArray(arg_src_value)
    ) {
        return _.concat(arg_obj_value, arg_src_value);
    }
};

module.exports = loaderHandler;