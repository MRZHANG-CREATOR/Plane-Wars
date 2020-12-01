import {Application} from 'pixi.js'
export const game=new Application({
    width:750,
    height:1080,
})
document.body.append(game.view)//添加实例

export function getRootContainer(){//导出根容器用于挂载
    return game.stage;
}