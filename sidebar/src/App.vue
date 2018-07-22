<template>
  <div id="app">
    <div class="sidebarBox">
      <sidebar :menus="menus"></sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menus: [
          {
              "id": "1F8F820CAD9D27D88F16112F203A99ED",
              "resourceLevel": 0,
              "resourceName": "dept",
              "nameCn": "单位管理",
              "resourceAlias": "dept",
              "resourceVal": "/pages/dept/dept",
              "resourceType": "0",
              "parentId": null,
              "weight": 1,
              "icon": "icon-shigongdanwei",
              "remark": null,
              "clientId": "5e3c7c2779ee47ff8df6394af4125a45",
              "delFlag": 0,
              "createTime": 1531378367533,
              "createId": "1F8F820CAD9D27D88F16112F203A99ED",
              "updateTime": 1531378367534,
              "updateId": "5e3c7c2779ee47ff8df6394af4125a45",
              "path": "deptManager",
              children: [
                  {
                    nameCn: "单位一",
                    path: "dept1"
                  },
                  {
                    nameCn: "单位二",
                    path: "dept2"
                  }
              ]
          },
          {
              "id": "6C6C05ED11EA40F8988F43EDF07C8F7E",
              "resourceLevel": 0,
              "resourceName": "apply",
              "nameCn": "应用管理",
              "resourceAlias": "别名",
              "resourceVal": "/pages/apply/apply",
              "resourceType": "0",
              "parentId": null,
              "weight": 1,
              "icon": "icon-yingyong",
              "remark": "备注信息",
              "clientId": "5e3c7c2779ee47ff8df6394af4125a45",
              "delFlag": 0,
              "createTime": 1531378367535,
              "createId": "6C6C05ED11EA40F8988F43EDF07C8F7E",
              "updateTime": 1531378367535,
              "updateId": "5e3c7c2779ee47ff8df6394af4125a45",
              "path": "applyManager",
              children: [
                  {
                    nameCn: "应用管理一",
                    path: "apply1",
                    children: [
                        {
                          nameCn: "应用管理一一",
                          path: "apply11"
                        }
                    ]
                  },
                  {
                    nameCn: "应用管理二",
                    path: "apply2",
                    children: [
                        {
                          nameCn: "应用管理二二",
                          path: "apply22"
                        }
                        
                    ]
                  }
              ]
          },
          {
              "id": "B93B20EA8EA89C524404BBBBC90BD415",
              "resourceLevel": 0,
              "resourceName": "department",
              "nameCn": "部门管理",
              "resourceAlias": "department",
              "resourceVal": "/pages/department/department",
              "resourceType": "0",
              "parentId": null,
              "weight": 2,
              "icon": "icon-bumen",
              "remark": null,
              "clientId": "5e3c7c2779ee47ff8df6394af4125a45",
              "delFlag": 0,
              "createTime": 1531378367536,
              "createId": "B93B20EA8EA89C524404BBBBC90BD415",
              "updateTime": 1531378367537,
              "updateId": "5e3c7c2779ee47ff8df6394af4125a45",
              "path": "departmentManager"
          },
          {
              "id": "4028908b5bad8958015bbce51dea001d",
              "resourceLevel": 0,
              "resourceName": "user",
              "nameCn": "用户管理",
              "resourceAlias": "user",
              "resourceVal": "/pages/user/user",
              "resourceType": "0",
              "parentId": null,
              "weight": 4,
              "icon": "icon-yonghuguanli",
              "remark": null,
              "clientId": "5e3c7c2779ee47ff8df6394af4125a45",
              "delFlag": 0,
              "createTime": 1531378367537,
              "createId": "688a456866714b84960c62b09d906527",
              "updateTime": 1531378367538,
              "updateId": "86EFD0E3A20CB02FD7F2538371089FB5",
              "path": "userManager"
          },
          {
              "id": "402890105c154d81015c1583551d0012",
              "resourceLevel": 0,
              "resourceName": "role",
              "nameCn": "角色管理",
              "resourceAlias": "role",
              "resourceVal": "/pages/role/role",
              "resourceType": "0",
              "parentId": null,
              "weight": 5,
              "icon": "icon-jiaoseguanli",
              "remark": "11",
              "clientId": "5e3c7c2779ee47ff8df6394af4125a45",
              "delFlag": 0,
              "createTime": 1531378367539,
              "createId": "688a456866714b84960c62b09d906527",
              "updateTime": 1531378367539,
              "updateId": "86EFD0E3A20CB02FD7F2538371089FB5",
              "path": "roleManager"
          },
          {
              "id": "402890f45c195b26015c195ff1900000",
              "resourceLevel": 0,
              "resourceName": "resource",
              "nameCn": "资源管理",
              "resourceAlias": "resource",
              "resourceVal": "/pages/resource/resource",
              "resourceType": "0",
              "parentId": null,
              "weight": 6,
              "icon": "icon-ziyuanguanli",
              "remark": null,
              "clientId": "5e3c7c2779ee47ff8df6394af4125a45",
              "delFlag": 0,
              "createTime": 1531378367540,
              "createId": "688a456866714b84960c62b09d906527",
              "updateTime": 1531378367541,
              "updateId": "5e3c7c2779ee47ff8df6394af4125a45",
              "path": "resourceManager"
          },
          {
              "id": "157C2BE9A76F5011D776F94D54E0A6BE",
              "resourceLevel": 0,
              "resourceName": "action",
              "nameCn": "按钮管理",
              "resourceAlias": "action",
              "resourceVal": "/pages/action/action",
              "resourceType": "0",
              "parentId": null,
              "weight": 7,
              "icon": "icon-anniu",
              "remark": null,
              "clientId": "5e3c7c2779ee47ff8df6394af4125a45",
              "delFlag": 0,
              "createTime": 1531378367541,
              "createId": "157C2BE9A76F5011D776F94D54E0A6BE",
              "updateTime": 1531378367542,
              "updateId": "5e3c7c2779ee47ff8df6394af4125a45",
              "path": "actionManager"
          },
          {
              "id": "22251EAAF93398912BFBCB6FF751ACA0",
              "resourceLevel": 0,
              "resourceName": "dictionarysize",
              "nameCn": "字典类型",
              "resourceAlias": "dictionarysize",
              "resourceVal": "/pages/dictionarysize/dictionarysize",
              "resourceType": "0",
              "parentId": null,
              "weight": 8,
              "icon": "icon_user",
              "remark": null,
              "clientId": "5e3c7c2779ee47ff8df6394af4125a45",
              "delFlag": 0,
              "createTime": 1531378367542,
              "createId": "22251EAAF93398912BFBCB6FF751ACA0",
              "updateTime": 1531378367543,
              "updateId": null,
              "path": "dictionarysizeManager"
          },
          {
              "id": "2F41F172C160AB6440A36410C61DCA03",
              "resourceLevel": 0,
              "resourceName": "dictionary",
              "nameCn": "字典管理",
              "resourceAlias": "dictionary",
              "resourceVal": "/pages/dictionary/dictionary",
              "resourceType": "0",
              "parentId": null,
              "weight": 9,
              "icon": "icon-zidianpeizhi",
              "remark": null,
              "clientId": "5e3c7c2779ee47ff8df6394af4125a45",
              "delFlag": 0,
              "createTime": 1531378367544,
              "createId": "2F41F172C160AB6440A36410C61DCA03",
              "updateTime": 1531378367544,
              "updateId": "5e3c7c2779ee47ff8df6394af4125a45",
              "path": "dictionaryManager"
          }
      ]
    }
  },
  created () {
  }
}
</script>
<style scoped>
#app .sidebarBox {
  position: fixed;
  width: 180px;
  top: 0px;
  left: 0px;
}
</style>