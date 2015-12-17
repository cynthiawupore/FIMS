var UITree = function () {

    var handleSample1 = function () {

        $('#tree_1').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }            
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            },
            "plugins": ["types"]
        });

        // handle link clicks in tree nodes(support target="_blank" as well)
        $('#tree_1').on('select_node.jstree', function(e,data) { 
            var link = $('#' + data.selected).find('a');
            if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                if (link.attr("target") == "_blank") {
                    link.attr("href").target = "_blank";
                }
                document.location.href = link.attr("href");
                return false;
            }
        });
    }

    var handleSample2 = function () {
        $('#tree_2').jstree({
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                'data': [
                    // 1
                    {
                        "text": "系统管理",
                        "children": 
                        [
                            {
                            "text": "内部设置",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["公司信息","资源管理","数据模板","提醒设置"]}, 
                            {
                            "text": "系统配置",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["公司信息","数据导入","工作日历","部门岗位","班组班次"]},
                            {
                            "text": "权限设置",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["设置角色","设置用户","查询权限"]},
                            {
                            "text": "辅助配置",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["提醒设置","资产设备","工作中心","目标设置","货代设置","物料对应"]},
                           
                        ]
                    },
                    // 2
                    {
                        "text": "人事管理",
                        "children": 
                        [
                            {
                            "text": "职工信息",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","查询"]}, 
                            {
                            "text": "职工管理",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["教育培训","表现记录","离职管理","查询"]},
                            {
                            "text": "绩效管理",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["初评","复评","决评","查询"]},

                        ]
                    },
                    // 3
                    {
                        "text": "工程管理",
                        "children": 
                        [
                            {
                            "text": "物料管理",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","修改","查询"]}, 
                           
                            {
                            "text": "BOM管理",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","修改","查询"]},
                            {
                            "text": "工艺路线",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","修改","查询"]},
                            {
                            "text": "高级功能",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["BOM查询","工艺比较"]},
                           
                        ]
                    },
                    // 4
                    {
                        "text": "销售管理",
                        "children": 
                        [
                            {
                            "text": "客户信息",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","查询"]}, 
                            {
                            "text": "物料对照",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","查询"]},
                            {
                            "text": "销售价格",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","修改","查询"]},
                            {
                            "text": "销售订单",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","分发","确认","查询"]},
                            {
                            "text": "销售发货",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["通知","发货","报关","分发","发货查询","报关查询"]},
                            {
                            "text": "销售对账",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","确认","查询"]},
                           
                        ]
                    },
                    // 5
                    {
                        "text": "采购管理",
                        "children": 
                        [
                            {
                            "text": "供应商管理",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","评审","审核","核准","修改","查询"]}, 
                            {
                            "text": "物料对照",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","查询"]},
                            {
                            "text": "采购价格",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","修改","查询"]},
                            {
                            "text": "采购计划",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","查询"]},
                            {
                            "text": "采购实施",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","修改","确认","查询"]},
                            {
                            "text": "采购对账",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","查询"]},
                           
                        ]
                    },
                    // 6
                    {
                        "text": "计划管理",
                        "children": 
                        [
                            {
                            "text": "物料计划",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","分发","查询"]}, 
                            {
                            "text": "生产计划",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","确认","查询"]},
                           
                        ]
                    },
                    // 7
                    {
                        "text": "生产管理",
                        "children": 
                        [
                            {
                            "text": "生产工单",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","确认","查询"]}, 
                            {
                            "text": "生产日报",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","查询"]},
                            {
                            "text": "补料申请",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","查询"]},
                            
                           
                        ]
                    },
                    // 8
                    {
                        "text": "库存管理",
                        "children": 
                        [
                            {
                            "text": "采购入库",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]}, 
                            {
                            "text": "自制入库",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                            {
                            "text": "销售出库",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                            {
                            "text": "领料出库",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                            {
                            "text": "供应商退料",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                            {
                            "text": "客户退货",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                            {
                            "text": "内部退料",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                            {
                            "text": "库存查询",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["数量"]},
                            {
                            "text": "库存盘点",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","查询"]},
                           
                        ]
                    },
                    // 9
                    {
                        "text": "质量管理",
                        "children": 
                        [
                            {
                            "text": "检验计划",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","修改","查询"]}, 
                            {
                            "text": "样品检验",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","查询"]},
                            {
                            "text": "入库检验",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","查询"]},
                            {
                            "text": "制程检验",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","查询"]},
                            {
                            "text": "成品检验",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","查询"]},
                            {
                            "text": "出货检验",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","查询"]},
                           
                        ]
                    },
                    // 10
                    {
                        "text": "行政管理",
                        "children": 
                        [
                            {
                            "text": "行政请购",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","查询"]}, 
                            {
                            "text": "行政采购",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","修改","查询"]},
                            {
                            "text": "领用管理",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["入库","领用","归还","查询"]},
                            
                        ]
                    },
                    // 11
                    {
                        "text": "外协管理",
                        "children": 
                        [
                            {
                            "text": "厂商管理",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","修改","查询"]}, 
                            {
                            "text": "内部入库",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                            {
                            "text": "外协出库",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                            {
                            "text": "外协入库",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},  
                             {
                            "text": "外协领料",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]}, 
                             {
                            "text": "内部退料",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                             {
                            "text": "内部退货",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","清点","查询"]},
                            {
                            "text": "外协库存",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["数量"]},    
                            {
                            "text": "外协扣款",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["设置","维护","审核","修改","查询"]}, 
                            {
                            "text": "外协对账",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","确认","查询"]},                        
                        ]
                    },
                    // 12
                    {
                        "text": "工具管理",
                        "children": 
                        [
                            {
                            "text": "公告管理",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","查询"]}, 
                            {
                            "text": "文件管理",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","更新","查询"]},
                             {
                            "text": "会议记录",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["维护","审核","核准","更新","查询"]},
                                                  
                        ]
                    },
                    // 13
                    {
                        "text": "报表查询",
                        "children": 
                        [
                            {
                            "text": "月报查询",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["工程","销售","采购","质量","计划","生产","库存","外协","人事","行政","财务"]}, 
                            {
                            "text": "进程查询",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["查询"]},
                            {
                            "text": "汇总查询",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["工程","销售","采购","质量","计划","生产","库存","外协","人事","行政","财务"]},
                            {
                            "text": "单据查询",
                            "icon" : "fa fa-folder icon-state-default",
                            "state": {"opened": true},
                            "children": ["工程","销售","采购","质量","计划","生产","库存","外协","人事","行政","财务"]},

                           
                        ]
                    },

                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            }
        });
    }

    var contextualMenuSample = function() {

        $("#tree_3").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                            "icon": "fa fa-warning icon-state-danger"
                        }, {
                            "text": "Initially open",
                            "icon" : "fa fa-folder icon-state-success",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {"text": "Another node", "icon" : "fa fa-file icon-state-warning"}
                            ]
                        }, {
                            "text": "Another Custom Icon",
                            "icon": "fa fa-warning icon-state-warning"
                        }, {
                            "text": "Disabled Node",
                            "icon": "fa fa-check icon-state-success",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "icon": "fa fa-folder icon-state-danger",
                            "children": [
                                {"text": "Item 1", "icon" : "fa fa-file icon-state-warning"},
                                {"text": "Item 2", "icon" : "fa fa-file icon-state-success"},
                                {"text": "Item 3", "icon" : "fa fa-file icon-state-default"},
                                {"text": "Item 4", "icon" : "fa fa-file icon-state-danger"},
                                {"text": "Item 5", "icon" : "fa fa-file icon-state-info"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "contextmenu", "dnd", "state", "types" ]
        });
    
    }

     var ajaxTreeSample = function() {

        $("#tree_4").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data' : {
                    'url' : function (node) {
                      return 'demo/jstree_ajax_data.php';
                    },
                    'data' : function (node) {
                      return { 'parent' : node.id };
                    }
                }
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state" : { "key" : "demo3" },
            "plugins" : [ "dnd", "state", "types" ]
        });
    
    }


    return {
        //main function to initiate the module
        init: function () {

            handleSample1();
            handleSample2();
            contextualMenuSample();
            ajaxTreeSample();

        }

    };

}();