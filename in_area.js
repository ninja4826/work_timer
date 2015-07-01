var time_obj = {};
time_obj = JSON.parse(tk.global('%TIME_OBJ'));
if ('in_time' in time_obj) {
    time_obj['lunch_end'] = (new Date()).getTime();
} else {
    time_obj['in_time'] = (new Date()).getTime();
}
tk.setGlobal('%TIME_OBJ', JSON.stringify(time_obj));
tk.setGlobal('%IN_OFFICE', 1);
tk.flash(tk.global('%TIME_OBJ'));