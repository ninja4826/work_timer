if (tk.global('%IN_OFFICE') == 1) {
    var time_obj = {};
    time_obj = JSON.parse(tk.global('%TIME_OBJ'));
    if ('out_time' in time_obj) {
        time_obj['lunch_start'] = time_obj['out_time'];
    }
    time_obj['out_time'] = (new Date()).getTime();
    tk.setGlobal('%TIME_OBJ', JSON.stringify(time_obj));
    tk.flash(tk.global('%TIME_OBJ'));
}