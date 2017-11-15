/*
 * by F 
 * date 2015-09-02
 * version 1.0.0
 */

;(function(){
	window.address = function(option){
		this.option = $.extend({
			data : [
				{
					select : '#addressProvince',
					label : '省',
					value : require('./province.json')
				},
				{
					select : '#addressCity',
					label : '市',
					value : require('./city.json')
				},
				{
					select : '#addressDistrict',
					label : '区',
					value : require('./district.json')
				}/*,
				{
					select : '#stree',
					label : '街',
					value : require('./district.json')
				}*/
			],
			onInit : null
		}, option || {});
		var that = this;
		this.setData = function(index, pid){
			var list = that.option.data;
			if(index == list.length || index < 0) return;
			index = index || 0;			
			var data = list[index].value;
			var html = '<option>'+list[index].label+'</option>';
			for(var i=0; i<data.length; i++){
				if(data[i].pid == pid || data[i].pid == undefined){					
					html += '<option value="' + data[i].id +'">' + data[i].name + '</option>';
				};
			};
			list[index].select.html(html);
			index < list.length-1 && that.setData(index+1);
		}

		this.set = function(arr){
			arr.forEach(function(value, index){
				var select = that.option.data[index].select;
				select.val(value).change();
				select.children().map(function(){
					this.innerHTML.indexOf(value) != -1 && $(this).prop('selected', true).change()
				});				
			});
		}

		this.init = function(){
			that.option.data.forEach(function(value, index){
				value.select = $(value.select);
				value.select.on('change', function (){
					that.setData(index+1, this.value);
				});
			});
			that.setData(0);
		}

		this.init();
		that.option.onInit && that.option.onInit(that);
	}
})()
