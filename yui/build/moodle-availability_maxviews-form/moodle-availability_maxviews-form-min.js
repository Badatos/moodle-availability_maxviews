YUI.add("moodle-availability_maxviews-form",function(e,t){M.availability_maxviews=M.availability_maxviews||{},M.availability_maxviews.form=e.Object(M.core_availability.plugin),M.availability_maxviews.form.initInner=function(){},M.availability_maxviews.form.instId=1,M.availability_maxviews.form.getNode=function(t){"use strict";var n,r,i,s;return s="maxviews"+M.availability_maxviews.form.instId,M.availability_maxviews.form.instId+=1,n="",n+='<label for="'+s+'">',n+=M.util.get_string("fieldlabel","availability_maxviews")+" </label>",n+=' <input type="number" name="maxviews" id="'+s+'">',i=e.Node.create("<span>"+n+"</span>"),t.viewslimit!==undefined&&i.one("input[name=maxviews]").set("value",t.viewslimit),M.availability_maxviews.form.addedEvents||(M.availability_maxviews.form.addedEvents=!0,r=e.one(".availability-field"),r.delegate("change",function(){M.core_availability.form.update()},".availability_maxviews input[name=maxviews]")),i},M.availability_maxviews.form.fillValue=function(e,t){"use strict";e.viewslimit=t.one("input[name=maxviews]").get("value")},M.availability_maxviews.form.fillErrors=function(e,t){"use strict";var n={};this.fillValue(n,t),(n.viewslimit===undefined||n.viewslimit===""||n.viewslimit<=0)&&e.push("availability_maxviews:validnumber")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});
