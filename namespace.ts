//命名空间
//引入其它模块
import {g} from "./generic"
namespace Q{
  let db = new g.IDBI<number>()
}