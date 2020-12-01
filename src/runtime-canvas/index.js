import { createRenderer } from 'vue'//渲染逻辑
import {Container,Texture,Sprite,Text} from 'pixi.js'
const renderer=createRenderer({
    createElement(type){//创建元素
        let element ;
        switch(type){
            case 'element':
                element=new Container()
                break;
            case 'sprite':
                element=new Sprite()
                break;
        }
        return element;
    },
    insert(el,parent) {
        if (el) {
          // 插入
          parent.addChild(el);
        }
      },
    parentNode(node){
        return node.parent;
    },
    remove(el){//删除一个元素时调用
        if(el&&el.parent){
            el.parent.remove(el)
        }
    },
    patchProp(el,key,prevValue,nextValue){//处理属性时调用
        switch (key){
            case 'texture':
                el.texture=Texture.from(nextValue);
                break;
            case "onclick":
                el.on("pointertap",nextValue);
                break;
            default:
                el[key]=nextValue;
                break;
        }
    },
    createText(text){//创建文本
        return new Text(text);
    },
    nextSibling(){},
    createComment(){}

})
export function createApp(rootComponent){
    return renderer.createApp(rootComponent)
}