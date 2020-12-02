import { createRenderer } from 'vue'//渲染逻辑
import {Container,Texture,Sprite,Text} from 'pixi.js'
const renderer=createRenderer({
    createElement(type){//创建元素
        let element ;
        switch(type){
            case 'container':
                element=new Container()
                break;
            case 'sprite':
                element=new Sprite()
                break;
        }
        // console.log("createElement")
        return element;
    },
    insert(el,parent) {
        // console.log("insert")
        // console.log(el)
        if (el) {
          parent.addChild(el); 
        }
      },
    parentNode(node){
        // console.log("parentNode")
        return node.parent;
    },
    remove(el){//删除一个元素时调用
        if(el&&el.parent){
            el.parent.removeChild(el)
        }
    },
    patchProp(el,key,prevValue,nextValue){//处理属性时调用
        switch (key){
            case 'texture':
                el.texture=Texture.from(nextValue);
                break;
            case "onClick"://C必须大写  @click会自动编译成onClick  模板编译会处理
                el.on("pointertap",nextValue);
                break;
            default:
                el[key]=nextValue;
                break;
        }
        // console.log('patchProp')
    },
    createText(text){//创建文本
        return new Text(text);
    },
    nextSibling(){},
    createComment(){},

})
console.log(renderer)
export function createApp(rootComponent){
    return renderer.createApp(rootComponent)
}