# bookappserver
using ReduxToolKit


what is middle Ware ?
How to connect middle ware with redux?
1)reduxToolKit=>redux+callAPi(create aync thunk)
2)conect Api=>response then بحصل loading of fetching Data =>using (aync=>librarey)دا نوع من ال من الMiddle ware بقدر ابعتله كذا action.
3) Middle ware
Type1: redux ف حالة reducer=>pure Function include (State,function)=>app Component(View)=>fire Action. 
Type2: action interact with store and  
**can dispatch more action =>display action from another action. 
**middle ware can get state global from reducers to using It. 

Create Aync Thunk=>
 1)Redux action type string 
2) callback function that should return a promise.
1-type =>name/fun of reducers
When promise of fetching Data  /CallBack using Try {} when returned 1-pending connecting to APi/fulfied  accetpt return. catch{} rejected.

