function change(){
    let  color = "#"+Math.random().toString().slice(2,8)
    console.log(color)
    return color//随机颜色
}

export const changeColor ={
    type:'change_color',
    color:change()
}
