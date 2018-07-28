/**
 *  自定义校验
 *  注册校验规则需传入数组规则
 *  使用请注明转载出处
 *  www.github.com/Tomar-Y/components
 */
(function () {
  function isEmptyObject(e) {
	var t;
	for (t in e)
		return !1;
	return !0
  }
  // 基本的校验规则
  const baseRules = {
    QQ: [
      { 
        pattern: /^[1-9][0-9]{4,13}$/,
        message: '输入正确的QQ号', 
        trigger: 'blur' 
      }
    ],
    money: [
      { 
        pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/, 
        message: '请填写数字,最多2位小数', 
        trigger: 'blur' 
      }
    ],
    cardId: [
      { 
        pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, 
        message: '证件号码不正确',
        trigger: 'blur' 
      }
    ],
    integer: [
      { 
        pattern: /^[0-9]*[1-9][0-9]*$/, 
        message: '请输入整数',
        trigger: 'blur'
      } 
    ],
    postCode: [
      { 
        pattern: /^[1-9]\d{5}(?!\d)$/, 
        message: '请输入正确的中国邮政编码',
        trigger: 'blur'
      }
    ],
    email: [
      { 
        pattern: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,
        message: '请输入正确的邮箱',
        trigger: 'blur'
      }
    ]
  }
  
  // 全局校验对象
  const Validate = function (opts, rules) {
    debugger
    if (!(this instanceof Validate)) return new Validate(opts, rules);
    this.register(rules)
  }  
  // 注册规则
  Validate.prototype.register = function (rules) {
    if (!isEmptyObject(rules)) {
      for (const key in rules) {
        if (!baseRules.key) {
          baseRules[key] = rules[key]
        }
      }
    }
    create()
  }

  // 调用 新增 回调
  Validate.prototype.callRules = (name, ...opts) => {
    if (!name || !Validate.prototype.rules[name]) return new Error('校验对象不存在' + name + '属性')
    return Validate.prototype.rules[name](opts)
  }

  // 创建规则 Error: 100：校验失败，101：正则表达式错误 
  const create = function () {
    if (!Validate.prototype.rules) {
      Validate.prototype.rules = {  }
    }
    console.log('rules: ', baseRules)
    for (const key in baseRules) {
      Validate.prototype.rules[key] = function (opts) {
        const ropts = opts
        const _rule = baseRules[key][0]
        let _callback = ""
        let _ruls = []
        if (ropts.length > 0) {
          ropts.map((item, index) => {
            if (typeof item === 'function') {
              _callback = item
            }
            if (Object.prototype.toString.call(item) === "[object Array]") {
              _ruls.push(item)
            }
          })
        }
        _ruls.unshift({
          validator: (rule, value, callback) => {
            if (value) {
              let reg = _rule.pattern
              try{
                reg = new RegExp(reg)
                if (!reg.test(value)) {
                  if (_callback) {
                    _callback(rule, value, '100')
                  } 
                  return callback(new Error(_rule.message || '校验信息不合规'))
                }
              } catch (e) {
                _callback(e, '101')
                console.log('无效正则')
              }
            }
          },
          trigger: _rule.trigger || 'blur'
        })
        return _ruls
      }
    }
  }

  if (typeof define === 'function' && define.amd) {
	  define( function() { return Validate } );
  } 
  else if (typeof module === 'object' && module.exports) {
    module.exports = Validate;
  } 
  else {
    window.Validate = Validate;
  }
}())

