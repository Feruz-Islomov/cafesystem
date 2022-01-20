import Table1 from "./tables/Table1";
import Table2 from "./tables/Table2";
import Table3 from "./tables/Table3";
import Table4 from "./tables/Table4";
import Table5 from "./tables/Table5";
import Table6 from "./tables/Table6";
import Table7 from "./tables/Table7";
import Table8 from "./tables/Table8";
import Table9 from "./tables/Table9";
import Table10 from "./tables/Table10";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Table from "./components/Table";
import { useEffect, useRef, useState } from "react";
import AdminPage from "./components/AdminPage";
import { v4 as uuidv4 } from "uuid";
import HomePage from "./components/HomePage";
import Burgerer from "./components/Burgerer";
import Pizzarer from "./components/Pizzarer";
import Drinker from "./components/Drinker";
import io from "socket.io-client";
import axios from "axios";
import ProductPage from "./components/ProductPage";
import ProductEdit from "./components/ProductEdit";
import ProductMenuEdit from "./components/ProductMenuEdit";
import Signup from "./components/Signup";
import Login from "./components/Login";
import useAuth from "./useAuth";
import Cookies from "js-cookie";
import useAdmin from "./useAd";
import PrintCheck from "./components/PrintCheck";

const Lchecks1 = JSON.parse(localStorage.getItem("checksAdmin1")) || [];
const Lchecks2 = JSON.parse(localStorage.getItem("checksAdmin2")) || [];
const Lchecks3 = JSON.parse(localStorage.getItem("checksAdmin3")) || [];
const Lchecks4 = JSON.parse(localStorage.getItem("checksAdmin4")) || [];
const Lchecks5 = JSON.parse(localStorage.getItem("checksAdmin5")) || [];
const Lchecks6 = JSON.parse(localStorage.getItem("checksAdmin6")) || [];
const Lchecks7 = JSON.parse(localStorage.getItem("checksAdmin7")) || [];
const Lchecks8 = JSON.parse(localStorage.getItem("checksAdmin8")) || [];
const Lchecks9 = JSON.parse(localStorage.getItem("checksAdmin9")) || [];
const Lchecks10 = JSON.parse(localStorage.getItem("checksAdmin10")) || [];
////////////////////////////////////11111111111111
const LocalCartItems1 = JSON.parse(localStorage.getItem("cartItems1")) || [];
const LocalStarts1 = JSON.parse(localStorage.getItem("starts1")) || [];
const LocalBurgers1 = JSON.parse(localStorage.getItem("burgers1")) || [];
const LocalPizzas1 = JSON.parse(localStorage.getItem("pizzas1")) || [];
const LocalDrinks1 = JSON.parse(localStorage.getItem("drinks1")) || [];
const LocalFinishes1 = JSON.parse(localStorage.getItem("finishes1")) || [];
const LocalChecks1 = JSON.parse(localStorage.getItem("checks1")) || [];
/////////////////////////////////222222222222222222222
const LocalCartItems2 = JSON.parse(localStorage.getItem("cartItems2")) || [];
const LocalStarts2 = JSON.parse(localStorage.getItem("starts2")) || [];
const LocalBurgers2 = JSON.parse(localStorage.getItem("burgers2")) || [];
const LocalPizzas2 = JSON.parse(localStorage.getItem("pizzas2")) || [];
const LocalDrinks2 = JSON.parse(localStorage.getItem("drinks2")) || [];
const LocalFinishes2 = JSON.parse(localStorage.getItem("finishes2")) || [];
const LocalChecks2 = JSON.parse(localStorage.getItem("checks2")) || [];
///////////////////////////////33333333333333333333333
const LocalCartItems3 = JSON.parse(localStorage.getItem("cartItems3")) || [];
const LocalStarts3 = JSON.parse(localStorage.getItem("starts3")) || [];
const LocalBurgers3 = JSON.parse(localStorage.getItem("burgers3")) || [];
const LocalPizzas3 = JSON.parse(localStorage.getItem("pizzas3")) || [];
const LocalDrinks3 = JSON.parse(localStorage.getItem("drinks3")) || [];
const LocalFinishes3 = JSON.parse(localStorage.getItem("finishes3")) || [];
const LocalChecks3 = JSON.parse(localStorage.getItem("checks3")) || [];
///////////////////////////////444444444444444444444444
const LocalCartItems4 = JSON.parse(localStorage.getItem("cartItems4")) || [];
const LocalStarts4 = JSON.parse(localStorage.getItem("starts4")) || [];
const LocalBurgers4 = JSON.parse(localStorage.getItem("burgers4")) || [];
const LocalPizzas4 = JSON.parse(localStorage.getItem("pizzas4")) || [];
const LocalDrinks4 = JSON.parse(localStorage.getItem("drinks4")) || [];
const LocalFinishes4 = JSON.parse(localStorage.getItem("finishes4")) || [];
const LocalChecks4 = JSON.parse(localStorage.getItem("checks4")) || [];
///////////////////////////////55555555555555555555555
const LocalCartItems5 = JSON.parse(localStorage.getItem("cartItems5")) || [];
const LocalStarts5 = JSON.parse(localStorage.getItem("starts5")) || [];
const LocalBurgers5 = JSON.parse(localStorage.getItem("burgers5")) || [];
const LocalPizzas5 = JSON.parse(localStorage.getItem("pizzas5")) || [];
const LocalDrinks5 = JSON.parse(localStorage.getItem("drinks5")) || [];
const LocalFinishes5 = JSON.parse(localStorage.getItem("finishes5")) || [];
const LocalChecks5 = JSON.parse(localStorage.getItem("checks5")) || [];
///////////////////////////////6666666666666666666666
const LocalCartItems6 = JSON.parse(localStorage.getItem("cartItems6")) || [];
const LocalStarts6 = JSON.parse(localStorage.getItem("starts6")) || [];
const LocalBurgers6 = JSON.parse(localStorage.getItem("burgers6")) || [];
const LocalPizzas6 = JSON.parse(localStorage.getItem("pizzas6")) || [];
const LocalDrinks6 = JSON.parse(localStorage.getItem("drinks6")) || [];
const LocalFinishes6 = JSON.parse(localStorage.getItem("finishes6")) || [];
const LocalChecks6 = JSON.parse(localStorage.getItem("checks6")) || [];
///////////////////////////////77777777777777777777777
const LocalCartItems7 = JSON.parse(localStorage.getItem("cartItems7")) || [];
const LocalStarts7 = JSON.parse(localStorage.getItem("starts7")) || [];
const LocalBurgers7 = JSON.parse(localStorage.getItem("burgers7")) || [];
const LocalPizzas7 = JSON.parse(localStorage.getItem("pizzas7")) || [];
const LocalDrinks7 = JSON.parse(localStorage.getItem("drinks7")) || [];
const LocalFinishes7 = JSON.parse(localStorage.getItem("finishes7")) || [];
const LocalChecks7 = JSON.parse(localStorage.getItem("checks7")) || [];
///////////////////////////////8888888888888888888888
const LocalCartItems8 = JSON.parse(localStorage.getItem("cartItems8")) || [];
const LocalStarts8 = JSON.parse(localStorage.getItem("starts8")) || [];
const LocalBurgers8 = JSON.parse(localStorage.getItem("burgers8")) || [];
const LocalPizzas8 = JSON.parse(localStorage.getItem("pizzas8")) || [];
const LocalDrinks8 = JSON.parse(localStorage.getItem("drinks8")) || [];
const LocalFinishes8 = JSON.parse(localStorage.getItem("finishes8")) || [];
const LocalChecks8 = JSON.parse(localStorage.getItem("checks8")) || [];
///////////////////////////////9999999999999999999999
const LocalCartItems9 = JSON.parse(localStorage.getItem("cartItems9")) || [];
const LocalStarts9 = JSON.parse(localStorage.getItem("starts9")) || [];
const LocalBurgers9 = JSON.parse(localStorage.getItem("burgers9")) || [];
const LocalPizzas9 = JSON.parse(localStorage.getItem("pizzas9")) || [];
const LocalDrinks9 = JSON.parse(localStorage.getItem("drinks9")) || [];
const LocalFinishes9 = JSON.parse(localStorage.getItem("finishes9")) || [];
const LocalChecks9 = JSON.parse(localStorage.getItem("checks9")) || [];
///////////////////////////////101010101010101010101010
const LocalCartItems10 = JSON.parse(localStorage.getItem("cartItems10")) || [];
const LocalStarts10 = JSON.parse(localStorage.getItem("starts10")) || [];
const LocalBurgers10 = JSON.parse(localStorage.getItem("burgers10")) || [];
const LocalPizzas10 = JSON.parse(localStorage.getItem("pizzas10")) || [];
const LocalDrinks10 = JSON.parse(localStorage.getItem("drinks10")) || [];
const LocalFinishes10 = JSON.parse(localStorage.getItem("finishes10")) || [];
const LocalChecks10 = JSON.parse(localStorage.getItem("checks10")) || [];
//////////////////////////////////data data data data data
const DatafromDb = JSON.parse(localStorage.getItem("data")) || {};
///////////////////////////////// month month month month month month
// const Lmonthly = JSON.parse(localStorage.getItem("monthly")) || [];
const socket = io("/");
function App() {
  const [data, setData] = useState(DatafromDb);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const showthat = async () => {
    try {
      const { data } = await axios.get("/products/1");
      var McProducts = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axios.get("/products/2");
      var KfcProducts = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axios.get("/products/3");
      var PizzaProducts = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axios.get("/products/4");
      var DrinksProducts = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axios.get("/products/5");
      var BuggetBurgersProducts = data;
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axios.get("/products/6");
      var Menu = data;
    } catch (err) {
      console.log(err);
    }
    const datas = {
      McProducts: McProducts,
      KfcProducts: KfcProducts,
      PizzaProducts: PizzaProducts,
      DrinksProducts: DrinksProducts,
      BuggetBurgersProducts: BuggetBurgersProducts,
      Menu: Menu,
    };
    setData(datas);
  };
  useEffect(() => {
    showthat();
  }, []);
  /////////////////////////////////////////11111111111111111111
  const [cartItems, setCartItems] = useState(LocalCartItems1);
  const [starts, setStarts] = useState(LocalStarts1);
  const [burgers, setBurgers] = useState(LocalBurgers1);
  const [pizzas, setPizzas] = useState(LocalPizzas1);
  const [drinks, setDrinks] = useState(LocalDrinks1);
  const [finishes, setFinishes] = useState(LocalFinishes1);
  const [checks, setChecks] = useState(LocalChecks1);

  const [cartItems2, setCartItems2] = useState(LocalCartItems2);
  const [starts2, setStarts2] = useState(LocalStarts2);
  const [burgers2, setBurgers2] = useState(LocalBurgers2);
  const [pizzas2, setPizzas2] = useState(LocalPizzas2);
  const [drinks2, setDrinks2] = useState(LocalDrinks2);
  const [finishes2, setFinishes2] = useState(LocalFinishes2);
  const [checks2, setChecks2] = useState(LocalChecks2);

  const [cartItems3, setCartItems3] = useState(LocalCartItems3);
  const [starts3, setStarts3] = useState(LocalStarts3);
  const [burgers3, setBurgers3] = useState(LocalBurgers3);
  const [pizzas3, setPizzas3] = useState(LocalPizzas3);
  const [drinks3, setDrinks3] = useState(LocalDrinks3);
  const [finishes3, setFinishes3] = useState(LocalFinishes3);
  const [checks3, setChecks3] = useState(LocalChecks3);

  const [cartItems4, setCartItems4] = useState(LocalCartItems4);
  const [starts4, setStarts4] = useState(LocalStarts4);
  const [burgers4, setBurgers4] = useState(LocalBurgers4);
  const [pizzas4, setPizzas4] = useState(LocalPizzas4);
  const [drinks4, setDrinks4] = useState(LocalDrinks4);
  const [finishes4, setFinishes4] = useState(LocalFinishes4);
  const [checks4, setChecks4] = useState(LocalChecks4);

  const [cartItems5, setCartItems5] = useState(LocalCartItems5);
  const [starts5, setStarts5] = useState(LocalStarts5);
  const [burgers5, setBurgers5] = useState(LocalBurgers5);
  const [pizzas5, setPizzas5] = useState(LocalPizzas5);
  const [drinks5, setDrinks5] = useState(LocalDrinks5);
  const [finishes5, setFinishes5] = useState(LocalFinishes5);
  const [checks5, setChecks5] = useState(LocalChecks5);

  const [cartItems6, setCartItems6] = useState(LocalCartItems6);
  const [starts6, setStarts6] = useState(LocalStarts6);
  const [burgers6, setBurgers6] = useState(LocalBurgers6);
  const [pizzas6, setPizzas6] = useState(LocalPizzas6);
  const [drinks6, setDrinks6] = useState(LocalDrinks6);
  const [finishes6, setFinishes6] = useState(LocalFinishes6);
  const [checks6, setChecks6] = useState(LocalChecks6);

  const [cartItems7, setCartItems7] = useState(LocalCartItems7);
  const [starts7, setStarts7] = useState(LocalStarts7);
  const [burgers7, setBurgers7] = useState(LocalBurgers7);
  const [pizzas7, setPizzas7] = useState(LocalPizzas7);
  const [drinks7, setDrinks7] = useState(LocalDrinks7);
  const [finishes7, setFinishes7] = useState(LocalFinishes7);
  const [checks7, setChecks7] = useState(LocalChecks7);

  const [cartItems8, setCartItems8] = useState(LocalCartItems8);
  const [starts8, setStarts8] = useState(LocalStarts8);
  const [burgers8, setBurgers8] = useState(LocalBurgers8);
  const [pizzas8, setPizzas8] = useState(LocalPizzas8);
  const [drinks8, setDrinks8] = useState(LocalDrinks8);
  const [finishes8, setFinishes8] = useState(LocalFinishes8);
  const [checks8, setChecks8] = useState(LocalChecks8);

  const [cartItems9, setCartItems9] = useState(LocalCartItems9);
  const [starts9, setStarts9] = useState(LocalStarts9);
  const [burgers9, setBurgers9] = useState(LocalBurgers9);
  const [pizzas9, setPizzas9] = useState(LocalPizzas9);
  const [drinks9, setDrinks9] = useState(LocalDrinks9);
  const [finishes9, setFinishes9] = useState(LocalFinishes9);
  const [checks9, setChecks9] = useState(LocalChecks9);

  const [cartItems10, setCartItems10] = useState(LocalCartItems10);
  const [starts10, setStarts10] = useState(LocalStarts10);
  const [burgers10, setBurgers10] = useState(LocalBurgers10);
  const [pizzas10, setPizzas10] = useState(LocalPizzas10);
  const [drinks10, setDrinks10] = useState(LocalDrinks10);
  const [finishes10, setFinishes10] = useState(LocalFinishes10);
  const [checks10, setChecks10] = useState(LocalChecks10);

  /////////////////////////////////////////////////////////////////////////

  const [adminChecks1, setAdminChecks1] = useState(Lchecks1);
  const [adminChecks2, setAdminChecks2] = useState(Lchecks2);
  const [adminChecks3, setAdminChecks3] = useState(Lchecks3);
  const [adminChecks4, setAdminChecks4] = useState(Lchecks4);
  const [adminChecks5, setAdminChecks5] = useState(Lchecks5);
  const [adminChecks6, setAdminChecks6] = useState(Lchecks6);
  const [adminChecks7, setAdminChecks7] = useState(Lchecks7);
  const [adminChecks8, setAdminChecks8] = useState(Lchecks8);
  const [adminChecks9, setAdminChecks9] = useState(Lchecks9);
  const [adminChecks10, setAdminChecks10] = useState(Lchecks10);

  /////////////////////////////////////////////////////////////////////////
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total4, setTotal4] = useState(0);
  const [total5, setTotal5] = useState(0);
  const [total6, setTotal6] = useState(0);
  const [total7, setTotal7] = useState(0);
  const [total8, setTotal8] = useState(0);
  const [total9, setTotal9] = useState(0);
  const [total10, setTotal10] = useState(0);
  /////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////
  const refStart = useRef(starts);
  refStart.current = starts;
  const refBurgers = useRef(burgers);
  refBurgers.current = burgers;
  const refPizzas = useRef(pizzas);
  refPizzas.current = pizzas;
  const refDrinks = useRef(drinks);
  refDrinks.current = drinks;
  const refFinishes = useRef(finishes);
  refFinishes.current = finishes;
  const refChecks = useRef(checks);
  refChecks.current = checks;
  const refAdminChecks = useRef(adminChecks1);
  refAdminChecks.current = adminChecks1;
  //////////////////////////////////
  const adding = (arr, setArr, product) => {
    const exist = arr.find((x) => x._id === product._id);
    if (exist) {
      setArr(
        arr.map((x) =>
          x._id === product._id
            ? { ...product, key: uuidv4(), qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setArr([...arr, { ...product, qty: 1, key: uuidv4() }]);
    }
  };
  const removing = (arr, setArr, product) => {
    const exist = arr.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setArr(arr.filter((x) => x._id !== product._id));
    } else {
      setArr(
        arr.map((x) =>
          x._id === product._id ? { ...product, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const movingToStarting = (cart, setCart, start, setStart, socketMsg) => {
    setCart([]);
    setStart([...cart, ...start]);
    socket.emit(socketMsg, { items: cart });
  };
  const movingToStartOn = (setCart, refStart, setStart, socketMsg) => {
    socket.on(socketMsg, (orders) => {
      setCart([]);
      setStart([...orders, ...refStart]);
    });
  };
  const deletingStart = (product, strts, setStart, socketMsg) => {
    const filtered = strts.filter((start) => start.key !== product.key);
    setStart(filtered);
    socket.emit(socketMsg, { item: product });
  };
  const fStartTKitchen = (
    order,
    strts,
    b,
    p,
    d,
    setStart,
    setB,
    setP,
    setD,
    socketMsg
  ) => {
    const filtered = strts.filter((start) => start.key !== order.key);
    setStart(filtered);
    if (order.category === "burger") {
      setB([order, ...b]);
    } else if (order.category === "pizza") {
      setP([order, ...p]);
    } else if (order.category === "drink") {
      setD([order, ...d]);
    }
    socket.emit(socketMsg, { item: order });
  };
  const fKitchenTFinish = (
    order,
    b,
    p,
    d,
    f,
    setB,
    setP,
    setD,
    setF,
    socketMsg
  ) => {
    if (order.category === "burger") {
      const Bfiltered = b.filter((burger) => burger.key !== order.key);
      setB(Bfiltered);
    } else if (order.category === "pizza") {
      const Pfiltered = p.filter((pizza) => pizza.key !== order.key);
      setP(Pfiltered);
    } else if (order.category === "drink") {
      const Dfiltered = d.filter((drink) => drink.key !== order.key);
      setD(Dfiltered);
    }
    setF([order, ...f]);
    socket.emit(socketMsg, { item: order });
  };
  const fFinishTCheck = (order, f, c, setF, setC, socketMsg) => {
    const Ffiltered = f.filter((finish) => finish.key !== order.key);
    setF(Ffiltered);
    setC([order, ...c]);
    socket.emit(socketMsg, { item: order });
  };
  const gettingChecks = (setC, setA, c, a, socketMsg) => {
    setC([]);
    setA([[...c, { date: new Date().toLocaleString() }], ...a]);
    socket.emit(socketMsg, { items: c });
  };
  ////////////////////////////////
  const onAdd = (product) => {
    adding(cartItems, setCartItems, product);
  };
  const onRemove = (product) => {
    removing(cartItems, setCartItems, product);
  };
  const moveToStart = () => {
    movingToStarting(cartItems, setCartItems, starts, setStarts, "moveToStart");
  };
  const deleteStart = (product) => {
    deletingStart(product, starts, setStarts, "deleteStart");
  };
  const fromStartToKitchen = (order) => {
    fStartTKitchen(
      order,
      starts,
      burgers,
      pizzas,
      drinks,
      setStarts,
      setBurgers,
      setPizzas,
      setDrinks,
      "fromStartToKitchen"
    );
  };
  const fromKitchenToFinish = (order) => {
    fKitchenTFinish(
      order,
      burgers,
      pizzas,
      drinks,
      finishes,
      setBurgers,
      setPizzas,
      setDrinks,
      setFinishes,
      "fromKtichenToFinish"
    );
  };
  const fromFinishToCheck = (order) => {
    fFinishTCheck(
      order,
      finishes,
      checks,
      setFinishes,
      setChecks,
      "fromFinishToCheck"
    );
  };
  const getChecks = () => {
    gettingChecks(
      setChecks,
      setAdminChecks1,
      checks,
      adminChecks1,
      "getChecks"
    );
  };
  useEffect(() => {
    movingToStartOn(setCartItems, refStart.current, setStarts, "moveToStart");
    socket.on("deleteStart", (product) => {
      const filtered = refStart.current.filter(
        (start) => start.key !== product.key
      );
      setStarts(filtered);
    });
    socket.on("fromStartToKitchen", (order) => {
      const filtered = refStart.current.filter(
        (start) => start.key !== order.key
      );
      setStarts(filtered);
      if (order.category === "burger") {
        setBurgers([order, ...refBurgers.current]);
      } else if (order.category === "pizza") {
        setPizzas([order, ...refPizzas.current]);
      } else if (order.category === "drink") {
        setDrinks([order, ...refDrinks.current]);
      }
    });
    socket.on("fromKtichenToFinish", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes([order, ...refFinishes.current]);
    });
    socket.on("fromFinishToCheck", (order) => {
      const Ffiltered = refFinishes.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes(Ffiltered);
      setChecks([order, ...refChecks.current]);
    });
    socket.on("getChecks", (allchecks) => {
      setChecks([]);
      setAdminChecks1([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks.current,
      ]);
    });
  }, []);

  /////////////////////////////////////////////////////////////////////////
  const refStart2 = useRef(starts2);
  refStart2.current = starts2;
  const refBurgers2 = useRef(burgers2);
  refBurgers2.current = burgers2;
  const refPizzas2 = useRef(pizzas2);
  refPizzas2.current = pizzas2;
  const refDrinks2 = useRef(drinks2);
  refDrinks2.current = drinks2;
  const refFinishes2 = useRef(finishes2);
  refFinishes2.current = finishes2;
  const refChecks2 = useRef(checks2);
  refChecks2.current = checks2;
  const refAdminChecks2 = useRef(adminChecks2);
  refAdminChecks2.current = adminChecks2;
  const onAdd2 = (product) => {
    adding(cartItems2, setCartItems2, product);
  };
  const onRemove2 = (product) => {
    removing(cartItems2, setCartItems2, product);
  };
  const moveToStart2 = () => {
    movingToStarting(
      cartItems2,
      setCartItems2,
      starts2,
      setStarts2,
      "moveToStart2"
    );
  };
  const deleteStart2 = (product) => {
    deletingStart(product, starts2, setStarts2, "deleteStart2");
  };
  const fromStartToKitchen2 = (order) => {
    fStartTKitchen(
      order,
      starts2,
      burgers2,
      pizzas2,
      drinks2,
      setStarts2,
      setBurgers2,
      setPizzas2,
      setDrinks2,
      "fromStartToKitchen2"
    );
  };
  const fromKitchenToFinish2 = (order) => {
    fKitchenTFinish(
      order,
      burgers2,
      pizzas2,
      drinks2,
      finishes2,
      setBurgers2,
      setPizzas2,
      setDrinks2,
      setFinishes2,
      "fromKtichenToFinish2"
    );
  };
  const fromFinishToCheck2 = (order) => {
    fFinishTCheck(
      order,
      finishes2,
      checks2,
      setFinishes2,
      setChecks2,
      "fromFinishToCheck2"
    );
  };
  const getChecks2 = () => {
    gettingChecks(
      setChecks2,
      setAdminChecks2,
      checks2,
      adminChecks2,
      "getChecks2"
    );
  };
  useEffect(() => {
    movingToStartOn(
      setCartItems2,
      refStart2.current,
      setStarts2,
      "moveToStart2"
    );
    socket.on("deleteStart2", (product) => {
      const filtered = refStart2.current.filter(
        (start) => start.key !== product.key
      );
      setStarts2(filtered);
    });
    socket.on("fromStartToKitchen2", (order) => {
      const filtered = refStart2.current.filter(
        (start) => start.key !== order.key
      );
      setStarts2(filtered);
      if (order.category === "burger") {
        setBurgers2([order, ...refBurgers2.current]);
      } else if (order.category === "pizza") {
        setPizzas2([order, ...refPizzas2.current]);
      } else if (order.category === "drink") {
        setDrinks2([order, ...refDrinks2.current]);
      }
    });
    socket.on("fromKtichenToFinish2", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers2.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers2(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas2.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas2(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks2.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks2(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes2([order, ...refFinishes2.current]);
    });
    socket.on("fromFinishToCheck2", (order) => {
      const Ffiltered = refFinishes2.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes2(Ffiltered);
      setChecks2([order, ...refChecks2.current]);
    });
    socket.on("getChecks2", (allchecks) => {
      setChecks2([]);
      setAdminChecks2([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks2.current,
      ]);
    });
  }, []);
  /////////////////////////////////////////////////////////////////////////
  const refStart3 = useRef(starts3);
  refStart3.current = starts3;
  const refBurgers3 = useRef(burgers3);
  refBurgers3.current = burgers3;
  const refPizzas3 = useRef(pizzas3);
  refPizzas3.current = pizzas3;
  const refDrinks3 = useRef(drinks3);
  refDrinks3.current = drinks3;
  const refFinishes3 = useRef(finishes3);
  refFinishes3.current = finishes3;
  const refChecks3 = useRef(checks3);
  refChecks3.current = checks3;
  const refAdminChecks3 = useRef(adminChecks3);
  refAdminChecks3.current = adminChecks3;
  const onAdd3 = (product) => {
    adding(cartItems3, setCartItems3, product);
  };
  const onRemove3 = (product) => {
    removing(cartItems3, setCartItems3, product);
  };
  const moveToStart3 = () => {
    movingToStarting(
      cartItems3,
      setCartItems3,
      starts3,
      setStarts3,
      "moveToStart3"
    );
  };
  const deleteStart3 = (product) => {
    deletingStart(product, starts3, setStarts3, "deleteStart3");
  };
  const fromStartToKitchen3 = (order) => {
    fStartTKitchen(
      order,
      starts3,
      burgers3,
      pizzas3,
      drinks3,
      setStarts3,
      setBurgers3,
      setPizzas3,
      setDrinks3,
      "fromStartToKitchen3"
    );
  };
  const fromKitchenToFinish3 = (order) => {
    fKitchenTFinish(
      order,
      burgers3,
      pizzas3,
      drinks3,
      finishes3,
      setBurgers3,
      setPizzas3,
      setDrinks3,
      setFinishes3,
      "fromKtichenToFinish3"
    );
  };
  const fromFinishToCheck3 = (order) => {
    fFinishTCheck(
      order,
      finishes3,
      checks3,
      setFinishes3,
      setChecks3,
      "fromFinishToCheck3"
    );
  };
  const getChecks3 = () => {
    gettingChecks(
      setChecks3,
      setAdminChecks3,
      checks3,
      adminChecks3,
      "getChecks3"
    );
  };
  useEffect(() => {
    movingToStartOn(
      setCartItems3,
      refStart3.current,
      setStarts3,
      "moveToStart3"
    );
    socket.on("deleteStart3", (product) => {
      const filtered = refStart3.current.filter(
        (start) => start.key !== product.key
      );
      setStarts3(filtered);
    });
    socket.on("fromStartToKitchen3", (order) => {
      const filtered = refStart3.current.filter(
        (start) => start.key !== order.key
      );
      setStarts3(filtered);
      if (order.category === "burger") {
        setBurgers3([order, ...refBurgers3.current]);
      } else if (order.category === "pizza") {
        setPizzas3([order, ...refPizzas3.current]);
      } else if (order.category === "drink") {
        setDrinks3([order, ...refDrinks3.current]);
      }
    });
    socket.on("fromKtichenToFinish3", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers3.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers3(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas3.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas3(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks3.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks3(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes3([order, ...refFinishes3.current]);
    });
    socket.on("fromFinishToCheck3", (order) => {
      const Ffiltered = refFinishes3.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes3(Ffiltered);
      setChecks3([order, ...refChecks3.current]);
    });
    socket.on("getChecks3", (allchecks) => {
      setChecks3([]);
      setAdminChecks3([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks3.current,
      ]);
    });
  }, []);
  /////////////////////////////////////////////////////////////////////////
  const refStart4 = useRef(starts4);
  refStart4.current = starts4;
  const refBurgers4 = useRef(burgers4);
  refBurgers4.current = burgers4;
  const refPizzas4 = useRef(pizzas4);
  refPizzas4.current = pizzas4;
  const refDrinks4 = useRef(drinks4);
  refDrinks4.current = drinks4;
  const refFinishes4 = useRef(finishes4);
  refFinishes4.current = finishes4;
  const refChecks4 = useRef(checks4);
  refChecks4.current = checks4;
  const refAdminChecks4 = useRef(adminChecks4);
  refAdminChecks4.current = adminChecks4;
  const onAdd4 = (product) => {
    adding(cartItems4, setCartItems4, product);
  };
  const onRemove4 = (product) => {
    removing(cartItems4, setCartItems4, product);
  };
  const moveToStart4 = () => {
    movingToStarting(
      cartItems4,
      setCartItems4,
      starts4,
      setStarts4,
      "moveToStart4"
    );
  };
  const deleteStart4 = (product) => {
    deletingStart(product, starts4, setStarts4, "deleteStart4");
  };
  const fromStartToKitchen4 = (order) => {
    fStartTKitchen(
      order,
      starts4,
      burgers4,
      pizzas4,
      drinks4,
      setStarts4,
      setBurgers4,
      setPizzas4,
      setDrinks4,
      "fromStartToKitchen4"
    );
  };
  const fromKitchenToFinish4 = (order) => {
    fKitchenTFinish(
      order,
      burgers4,
      pizzas4,
      drinks4,
      finishes4,
      setBurgers4,
      setPizzas4,
      setDrinks4,
      setFinishes4,
      "fromKtichenToFinish4"
    );
  };
  const fromFinishToCheck4 = (order) => {
    fFinishTCheck(
      order,
      finishes4,
      checks4,
      setFinishes4,
      setChecks4,
      "fromFinishToCheck4"
    );
  };
  const getChecks4 = () => {
    gettingChecks(
      setChecks4,
      setAdminChecks4,
      checks4,
      adminChecks4,
      "getChecks4"
    );
  };
  useEffect(() => {
    movingToStartOn(
      setCartItems4,
      refStart4.current,
      setStarts4,
      "moveToStart4"
    );
    socket.on("deleteStart4", (product) => {
      const filtered = refStart4.current.filter(
        (start) => start.key !== product.key
      );
      setStarts4(filtered);
    });
    socket.on("fromStartToKitchen4", (order) => {
      const filtered = refStart4.current.filter(
        (start) => start.key !== order.key
      );
      setStarts4(filtered);
      if (order.category === "burger") {
        setBurgers4([order, ...refBurgers4.current]);
      } else if (order.category === "pizza") {
        setPizzas4([order, ...refPizzas4.current]);
      } else if (order.category === "drink") {
        setDrinks4([order, ...refDrinks4.current]);
      }
    });
    socket.on("fromKtichenToFinish4", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers4.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers4(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas4.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas4(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks4.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks4(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes4([order, ...refFinishes4.current]);
    });
    socket.on("fromFinishToCheck4", (order) => {
      const Ffiltered = refFinishes4.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes4(Ffiltered);
      setChecks4([order, ...refChecks4.current]);
    });
    socket.on("getChecks4", (allchecks) => {
      setChecks4([]);
      setAdminChecks4([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks4.current,
      ]);
    });
  }, []);

  /////////////////////////////////////////////////////////////////////////
  const refStart5 = useRef(starts5);
  refStart5.current = starts5;
  const refBurgers5 = useRef(burgers5);
  refBurgers5.current = burgers5;
  const refPizzas5 = useRef(pizzas5);
  refPizzas5.current = pizzas5;
  const refDrinks5 = useRef(drinks5);
  refDrinks5.current = drinks5;
  const refFinishes5 = useRef(finishes5);
  refFinishes5.current = finishes5;
  const refChecks5 = useRef(checks5);
  refChecks5.current = checks5;
  const refAdminChecks5 = useRef(adminChecks5);
  refAdminChecks5.current = adminChecks5;
  const onAdd5 = (product) => {
    adding(cartItems5, setCartItems5, product);
  };
  const onRemove5 = (product) => {
    removing(cartItems5, setCartItems5, product);
  };
  const moveToStart5 = () => {
    movingToStarting(
      cartItems5,
      setCartItems5,
      starts5,
      setStarts5,
      "moveToStart5"
    );
  };
  const deleteStart5 = (product) => {
    deletingStart(product, starts5, setStarts5, "deleteStart5");
  };
  const fromStartToKitchen5 = (order) => {
    fStartTKitchen(
      order,
      starts5,
      burgers5,
      pizzas5,
      drinks5,
      setStarts5,
      setBurgers5,
      setPizzas5,
      setDrinks5,
      "fromStartToKitchen5"
    );
  };
  const fromKitchenToFinish5 = (order) => {
    fKitchenTFinish(
      order,
      burgers5,
      pizzas5,
      drinks5,
      finishes5,
      setBurgers5,
      setPizzas5,
      setDrinks5,
      setFinishes5,
      "fromKtichenToFinish5"
    );
  };
  const fromFinishToCheck5 = (order) => {
    fFinishTCheck(
      order,
      finishes5,
      checks5,
      setFinishes5,
      setChecks5,
      "fromFinishToCheck5"
    );
  };
  const getChecks5 = () => {
    gettingChecks(
      setChecks5,
      setAdminChecks5,
      checks5,
      adminChecks5,
      "getChecks5"
    );
  };
  useEffect(() => {
    movingToStartOn(
      setCartItems5,
      refStart5.current,
      setStarts5,
      "moveToStart5"
    );
    socket.on("deleteStart5", (product) => {
      const filtered = refStart5.current.filter(
        (start) => start.key !== product.key
      );
      setStarts5(filtered);
    });
    socket.on("fromStartToKitchen5", (order) => {
      const filtered = refStart5.current.filter(
        (start) => start.key !== order.key
      );
      setStarts5(filtered);
      if (order.category === "burger") {
        setBurgers5([order, ...refBurgers5.current]);
      } else if (order.category === "pizza") {
        setPizzas5([order, ...refPizzas5.current]);
      } else if (order.category === "drink") {
        setDrinks5([order, ...refDrinks5.current]);
      }
    });
    socket.on("fromKtichenToFinish5", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers5.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers5(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas5.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas5(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks5.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks5(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes5([order, ...refFinishes5.current]);
    });
    socket.on("fromFinishToCheck5", (order) => {
      const Ffiltered = refFinishes5.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes5(Ffiltered);
      setChecks5([order, ...refChecks5.current]);
    });
    socket.on("getChecks5", (allchecks) => {
      setChecks5([]);
      setAdminChecks5([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks5.current,
      ]);
    });
  }, []);

  /////////////////////////////////////////////////////////////////////////
  const refStart6 = useRef(starts6);
  refStart6.current = starts6;
  const refBurgers6 = useRef(burgers6);
  refBurgers6.current = burgers6;
  const refPizzas6 = useRef(pizzas6);
  refPizzas6.current = pizzas6;
  const refDrinks6 = useRef(drinks6);
  refDrinks6.current = drinks6;
  const refFinishes6 = useRef(finishes6);
  refFinishes6.current = finishes6;
  const refChecks6 = useRef(checks6);
  refChecks6.current = checks6;
  const refAdminChecks6 = useRef(adminChecks6);
  refAdminChecks6.current = adminChecks6;
  const onAdd6 = (product) => {
    adding(cartItems6, setCartItems6, product);
  };
  const onRemove6 = (product) => {
    removing(cartItems6, setCartItems6, product);
  };
  const moveToStart6 = () => {
    movingToStarting(
      cartItems6,
      setCartItems6,
      starts6,
      setStarts6,
      "moveToStart6"
    );
  };
  const deleteStart6 = (product) => {
    deletingStart(product, starts6, setStarts6, "deleteStart6");
  };
  const fromStartToKitchen6 = (order) => {
    fStartTKitchen(
      order,
      starts6,
      burgers6,
      pizzas6,
      drinks6,
      setStarts6,
      setBurgers6,
      setPizzas6,
      setDrinks6,
      "fromStartToKitchen6"
    );
  };
  const fromKitchenToFinish6 = (order) => {
    fKitchenTFinish(
      order,
      burgers6,
      pizzas6,
      drinks6,
      finishes6,
      setBurgers6,
      setPizzas6,
      setDrinks6,
      setFinishes6,
      "fromKtichenToFinish6"
    );
  };
  const fromFinishToCheck6 = (order) => {
    fFinishTCheck(
      order,
      finishes6,
      checks6,
      setFinishes6,
      setChecks6,
      "fromFinishToCheck6"
    );
  };
  const getChecks6 = () => {
    gettingChecks(
      setChecks6,
      setAdminChecks6,
      checks6,
      adminChecks6,
      "getChecks6"
    );
  };
  useEffect(() => {
    movingToStartOn(
      setCartItems6,
      refStart6.current,
      setStarts6,
      "moveToStart6"
    );
    socket.on("deleteStart6", (product) => {
      const filtered = refStart6.current.filter(
        (start) => start.key !== product.key
      );
      setStarts6(filtered);
    });
    socket.on("fromStartToKitchen6", (order) => {
      const filtered = refStart6.current.filter(
        (start) => start.key !== order.key
      );
      setStarts6(filtered);
      if (order.category === "burger") {
        setBurgers6([order, ...refBurgers6.current]);
      } else if (order.category === "pizza") {
        setPizzas6([order, ...refPizzas6.current]);
      } else if (order.category === "drink") {
        setDrinks6([order, ...refDrinks6.current]);
      }
    });
    socket.on("fromKtichenToFinish6", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers6.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers6(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas6.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas6(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks6.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks6(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes6([order, ...refFinishes6.current]);
    });
    socket.on("fromFinishToCheck6", (order) => {
      const Ffiltered = refFinishes6.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes6(Ffiltered);
      setChecks6([order, ...refChecks6.current]);
    });
    socket.on("getChecks6", (allchecks) => {
      setChecks6([]);
      setAdminChecks6([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks6.current,
      ]);
    });
  }, []);

  /////////////////////////////////////////////////////////////////////////
  const refStart7 = useRef(starts7);
  refStart7.current = starts7;
  const refBurgers7 = useRef(burgers7);
  refBurgers7.current = burgers7;
  const refPizzas7 = useRef(pizzas7);
  refPizzas7.current = pizzas7;
  const refDrinks7 = useRef(drinks7);
  refDrinks7.current = drinks7;
  const refFinishes7 = useRef(finishes7);
  refFinishes7.current = finishes7;
  const refChecks7 = useRef(checks7);
  refChecks7.current = checks7;
  const refAdminChecks7 = useRef(adminChecks7);
  refAdminChecks7.current = adminChecks7;
  const onAdd7 = (product) => {
    adding(cartItems7, setCartItems7, product);
  };
  const onRemove7 = (product) => {
    removing(cartItems7, setCartItems7, product);
  };
  const moveToStart7 = () => {
    movingToStarting(
      cartItems7,
      setCartItems7,
      starts7,
      setStarts7,
      "moveToStart7"
    );
  };
  const deleteStart7 = (product) => {
    deletingStart(product, starts7, setStarts7, "deleteStart7");
  };
  const fromStartToKitchen7 = (order) => {
    fStartTKitchen(
      order,
      starts7,
      burgers7,
      pizzas7,
      drinks7,
      setStarts7,
      setBurgers7,
      setPizzas7,
      setDrinks7,
      "fromStartToKitchen7"
    );
  };
  const fromKitchenToFinish7 = (order) => {
    fKitchenTFinish(
      order,
      burgers7,
      pizzas7,
      drinks7,
      finishes7,
      setBurgers7,
      setPizzas7,
      setDrinks7,
      setFinishes7,
      "fromKtichenToFinish7"
    );
  };
  const fromFinishToCheck7 = (order) => {
    fFinishTCheck(
      order,
      finishes7,
      checks7,
      setFinishes7,
      setChecks7,
      "fromFinishToCheck7"
    );
  };
  const getChecks7 = () => {
    gettingChecks(
      setChecks7,
      setAdminChecks7,
      checks7,
      adminChecks7,
      "getChecks7"
    );
  };
  useEffect(() => {
    movingToStartOn(
      setCartItems7,
      refStart7.current,
      setStarts7,
      "moveToStart7"
    );
    socket.on("deleteStart7", (product) => {
      const filtered = refStart7.current.filter(
        (start) => start.key !== product.key
      );
      setStarts7(filtered);
    });
    socket.on("fromStartToKitchen7", (order) => {
      const filtered = refStart7.current.filter(
        (start) => start.key !== order.key
      );
      setStarts7(filtered);
      if (order.category === "burger") {
        setBurgers7([order, ...refBurgers7.current]);
      } else if (order.category === "pizza") {
        setPizzas7([order, ...refPizzas7.current]);
      } else if (order.category === "drink") {
        setDrinks7([order, ...refDrinks7.current]);
      }
    });
    socket.on("fromKtichenToFinish7", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers7.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers7(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas7.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas7(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks7.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks7(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes7([order, ...refFinishes7.current]);
    });
    socket.on("fromFinishToCheck7", (order) => {
      const Ffiltered = refFinishes7.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes7(Ffiltered);
      setChecks7([order, ...refChecks7.current]);
    });
    socket.on("getChecks7", (allchecks) => {
      setChecks7([]);
      setAdminChecks7([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks7.current,
      ]);
    });
  }, []);

  /////////////////////////////////////////////////////////////////////////
  const refStart8 = useRef(starts8);
  refStart8.current = starts8;
  const refBurgers8 = useRef(burgers8);
  refBurgers8.current = burgers8;
  const refPizzas8 = useRef(pizzas8);
  refPizzas8.current = pizzas8;
  const refDrinks8 = useRef(drinks8);
  refDrinks8.current = drinks8;
  const refFinishes8 = useRef(finishes8);
  refFinishes8.current = finishes8;
  const refChecks8 = useRef(checks8);
  refChecks8.current = checks8;
  const refAdminChecks8 = useRef(adminChecks8);
  refAdminChecks8.current = adminChecks8;
  const onAdd8 = (product) => {
    adding(cartItems8, setCartItems8, product);
  };
  const onRemove8 = (product) => {
    removing(cartItems8, setCartItems8, product);
  };
  const moveToStart8 = () => {
    movingToStarting(
      cartItems8,
      setCartItems8,
      starts8,
      setStarts8,
      "moveToStart8"
    );
  };
  const deleteStart8 = (product) => {
    deletingStart(product, starts8, setStarts8, "deleteStart8");
  };
  const fromStartToKitchen8 = (order) => {
    fStartTKitchen(
      order,
      starts8,
      burgers8,
      pizzas8,
      drinks8,
      setStarts8,
      setBurgers8,
      setPizzas8,
      setDrinks8,
      "fromStartToKitchen8"
    );
  };
  const fromKitchenToFinish8 = (order) => {
    fKitchenTFinish(
      order,
      burgers8,
      pizzas8,
      drinks8,
      finishes8,
      setBurgers8,
      setPizzas8,
      setDrinks8,
      setFinishes8,
      "fromKtichenToFinish8"
    );
  };
  const fromFinishToCheck8 = (order) => {
    fFinishTCheck(
      order,
      finishes8,
      checks8,
      setFinishes8,
      setChecks8,
      "fromFinishToCheck8"
    );
  };
  const getChecks8 = () => {
    gettingChecks(
      setChecks8,
      setAdminChecks8,
      checks8,
      adminChecks8,
      "getChecks8"
    );
  };
  useEffect(() => {
    movingToStartOn(
      setCartItems8,
      refStart8.current,
      setStarts8,
      "moveToStart8"
    );
    socket.on("deleteStart8", (product) => {
      const filtered = refStart8.current.filter(
        (start) => start.key !== product.key
      );
      setStarts8(filtered);
    });
    socket.on("fromStartToKitchen8", (order) => {
      const filtered = refStart8.current.filter(
        (start) => start.key !== order.key
      );
      setStarts8(filtered);
      if (order.category === "burger") {
        setBurgers8([order, ...refBurgers8.current]);
      } else if (order.category === "pizza") {
        setPizzas8([order, ...refPizzas8.current]);
      } else if (order.category === "drink") {
        setDrinks8([order, ...refDrinks8.current]);
      }
    });
    socket.on("fromKtichenToFinish8", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers8.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers8(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas8.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas8(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks8.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks8(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes8([order, ...refFinishes8.current]);
    });
    socket.on("fromFinishToCheck8", (order) => {
      const Ffiltered = refFinishes8.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes8(Ffiltered);
      setChecks8([order, ...refChecks8.current]);
    });
    socket.on("getChecks8", (allchecks) => {
      setChecks8([]);
      setAdminChecks8([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks8.current,
      ]);
    });
  }, []);

  /////////////////////////////////////////////////////////////////////////
  const refStart9 = useRef(starts9);
  refStart9.current = starts9;
  const refBurgers9 = useRef(burgers9);
  refBurgers9.current = burgers9;
  const refPizzas9 = useRef(pizzas9);
  refPizzas9.current = pizzas9;
  const refDrinks9 = useRef(drinks9);
  refDrinks9.current = drinks9;
  const refFinishes9 = useRef(finishes9);
  refFinishes9.current = finishes9;
  const refChecks9 = useRef(checks9);
  refChecks9.current = checks9;
  const refAdminChecks9 = useRef(adminChecks9);
  refAdminChecks9.current = adminChecks9;
  const onAdd9 = (product) => {
    adding(cartItems9, setCartItems9, product);
  };
  const onRemove9 = (product) => {
    removing(cartItems9, setCartItems9, product);
  };
  const moveToStart9 = () => {
    movingToStarting(
      cartItems9,
      setCartItems9,
      starts9,
      setStarts9,
      "moveToStart9"
    );
  };
  const deleteStart9 = (product) => {
    deletingStart(product, starts9, setStarts9, "deleteStart9");
  };
  const fromStartToKitchen9 = (order) => {
    fStartTKitchen(
      order,
      starts9,
      burgers9,
      pizzas9,
      drinks9,
      setStarts9,
      setBurgers9,
      setPizzas9,
      setDrinks9,
      "fromStartToKitchen9"
    );
  };
  const fromKitchenToFinish9 = (order) => {
    fKitchenTFinish(
      order,
      burgers9,
      pizzas9,
      drinks9,
      finishes9,
      setBurgers9,
      setPizzas9,
      setDrinks9,
      setFinishes9,
      "fromKtichenToFinish9"
    );
  };
  const fromFinishToCheck9 = (order) => {
    fFinishTCheck(
      order,
      finishes9,
      checks9,
      setFinishes9,
      setChecks9,
      "fromFinishToCheck9"
    );
  };
  const getChecks9 = () => {
    gettingChecks(
      setChecks9,
      setAdminChecks9,
      checks9,
      adminChecks9,
      "getChecks9"
    );
  };
  useEffect(() => {
    movingToStartOn(
      setCartItems9,
      refStart9.current,
      setStarts9,
      "moveToStart9"
    );
    socket.on("deleteStart9", (product) => {
      const filtered = refStart9.current.filter(
        (start) => start.key !== product.key
      );
      setStarts9(filtered);
    });
    socket.on("fromStartToKitchen9", (order) => {
      const filtered = refStart9.current.filter(
        (start) => start.key !== order.key
      );
      setStarts9(filtered);
      if (order.category === "burger") {
        setBurgers9([order, ...refBurgers9.current]);
      } else if (order.category === "pizza") {
        setPizzas9([order, ...refPizzas9.current]);
      } else if (order.category === "drink") {
        setDrinks9([order, ...refDrinks9.current]);
      }
    });
    socket.on("fromKtichenToFinish9", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers9.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers9(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas9.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas9(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks9.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks9(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes9([order, ...refFinishes9.current]);
    });
    socket.on("fromFinishToCheck9", (order) => {
      const Ffiltered = refFinishes9.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes9(Ffiltered);
      setChecks9([order, ...refChecks9.current]);
    });
    socket.on("getChecks9", (allchecks) => {
      setChecks9([]);
      setAdminChecks9([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks9.current,
      ]);
    });
  }, []);

  /////////////////////////////////////////////////////////////////////////
  const refStart10 = useRef(starts10);
  refStart10.current = starts10;
  const refBurgers10 = useRef(burgers10);
  refBurgers10.current = burgers10;
  const refPizzas10 = useRef(pizzas10);
  refPizzas10.current = pizzas10;
  const refDrinks10 = useRef(drinks10);
  refDrinks10.current = drinks10;
  const refFinishes10 = useRef(finishes10);
  refFinishes10.current = finishes10;
  const refChecks10 = useRef(checks10);
  refChecks10.current = checks10;
  const refAdminChecks10 = useRef(adminChecks10);
  refAdminChecks10.current = adminChecks10;
  const onAdd10 = (product) => {
    adding(cartItems10, setCartItems10, product);
  };
  const onRemove10 = (product) => {
    removing(cartItems10, setCartItems10, product);
  };
  const moveToStart10 = () => {
    movingToStarting(
      cartItems10,
      setCartItems10,
      starts10,
      setStarts10,
      "moveToStart10"
    );
  };
  const deleteStart10 = (product) => {
    deletingStart(product, starts10, setStarts10, "deleteStart10");
  };
  const fromStartToKitchen10 = (order) => {
    fStartTKitchen(
      order,
      starts10,
      burgers10,
      pizzas10,
      drinks10,
      setStarts10,
      setBurgers10,
      setPizzas10,
      setDrinks10,
      "fromStartToKitchen10"
    );
  };
  const fromKitchenToFinish10 = (order) => {
    fKitchenTFinish(
      order,
      burgers,
      pizzas10,
      drinks10,
      finishes10,
      setBurgers10,
      setPizzas10,
      setDrinks10,
      setFinishes10,
      "fromKtichenToFinish10"
    );
  };
  const fromFinishToCheck10 = (order) => {
    fFinishTCheck(
      order,
      finishes10,
      checks10,
      setFinishes10,
      setChecks10,
      "fromFinishToCheck10"
    );
  };
  const getChecks10 = () => {
    gettingChecks(
      setChecks10,
      setAdminChecks10,
      checks10,
      adminChecks10,
      "getChecks10"
    );
  };
  useEffect(() => {
    movingToStartOn(
      setCartItems10,
      refStart10.current,
      setStarts10,
      "moveToStart10"
    );
    socket.on("deleteStart10", (product) => {
      const filtered = refStart10.current.filter(
        (start) => start.key !== product.key
      );
      setStarts10(filtered);
    });
    socket.on("fromStartToKitchen10", (order) => {
      const filtered = refStart10.current.filter(
        (start) => start.key !== order.key
      );
      setStarts10(filtered);
      if (order.category === "burger") {
        setBurgers10([order, ...refBurgers10.current]);
      } else if (order.category === "pizza") {
        setPizzas10([order, ...refPizzas10.current]);
      } else if (order.category === "drink") {
        setDrinks10([order, ...refDrinks10.current]);
      }
    });
    socket.on("fromKtichenToFinish10", (order) => {
      const deleteKitchenOrder = (order) => {
        if (order.category === "burger") {
          const Bfiltered = refBurgers10.current.filter(
            (burger) => burger.key !== order.key
          );
          setBurgers10(Bfiltered);
        } else if (order.category === "pizza") {
          const Pfiltered = refPizzas10.current.filter(
            (pizza) => pizza.key !== order.key
          );
          setPizzas10(Pfiltered);
        } else if (order.category === "drink") {
          const Dfiltered = refDrinks10.current.filter(
            (drink) => drink.key !== order.key
          );
          setDrinks10(Dfiltered);
        }
      };
      deleteKitchenOrder(order);
      setFinishes10([order, ...refFinishes10.current]);
    });
    socket.on("fromFinishToCheck10", (order) => {
      const Ffiltered = refFinishes10.current.filter(
        (finish) => finish.key !== order.key
      );
      setFinishes10(Ffiltered);
      setChecks10([order, ...refChecks10.current]);
    });
    socket.on("getChecks10", (allchecks) => {
      setChecks10([]);
      setAdminChecks10([
        [...allchecks, { date: new Date().toLocaleString() }],
        ...refAdminChecks10.current,
      ]);
    });
  }, []);

  //////////////////////////////////////1111111111111111111111111111111
  useEffect(() => {
    localStorage.setItem("cartItems1", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("starts1", JSON.stringify(starts));
  }, [starts]);
  useEffect(() => {
    localStorage.setItem("pizzas1", JSON.stringify(pizzas));
  }, [pizzas]);
  useEffect(() => {
    localStorage.setItem("burgers1", JSON.stringify(burgers));
  }, [burgers]);
  useEffect(() => {
    localStorage.setItem("drinks1", JSON.stringify(drinks));
  }, [drinks]);
  useEffect(() => {
    localStorage.setItem("finishes1", JSON.stringify(finishes));
  }, [finishes]);
  useEffect(() => {
    localStorage.setItem("checks1", JSON.stringify(checks));
  }, [checks]);
  //////////////////////////////////////222222222222222222222222222222222222

  useEffect(() => {
    localStorage.setItem("cartItems2", JSON.stringify(cartItems2));
  }, [cartItems2]);
  useEffect(() => {
    localStorage.setItem("starts2", JSON.stringify(starts2));
  }, [starts2]);
  useEffect(() => {
    localStorage.setItem("pizzas2", JSON.stringify(pizzas2));
  }, [pizzas2]);
  useEffect(() => {
    localStorage.setItem("burgers2", JSON.stringify(burgers2));
  }, [burgers2]);
  useEffect(() => {
    localStorage.setItem("drinks2", JSON.stringify(drinks2));
  }, [drinks2]);
  useEffect(() => {
    localStorage.setItem("finishes2", JSON.stringify(finishes2));
  }, [finishes2]);
  useEffect(() => {
    localStorage.setItem("checks2", JSON.stringify(checks2));
  }, [checks2]);
  ///////////////////////////////////3333333333333333333333333333333333

  useEffect(() => {
    localStorage.setItem("cartItems3", JSON.stringify(cartItems3));
  }, [cartItems3]);
  useEffect(() => {
    localStorage.setItem("starts3", JSON.stringify(starts3));
  }, [starts3]);
  useEffect(() => {
    localStorage.setItem("pizzas3", JSON.stringify(pizzas3));
  }, [pizzas3]);
  useEffect(() => {
    localStorage.setItem("burgers3", JSON.stringify(burgers3));
  }, [burgers3]);
  useEffect(() => {
    localStorage.setItem("drinks3", JSON.stringify(drinks3));
  }, [drinks3]);
  useEffect(() => {
    localStorage.setItem("finishes3", JSON.stringify(finishes3));
  }, [finishes3]);
  useEffect(() => {
    localStorage.setItem("checks3", JSON.stringify(checks3));
  }, [checks3]);
  ///////////////////////////////////44444444444444444444444444444444444444

  useEffect(() => {
    localStorage.setItem("cartItems4", JSON.stringify(cartItems4));
  }, [cartItems4]);
  useEffect(() => {
    localStorage.setItem("starts4", JSON.stringify(starts4));
  }, [starts4]);
  useEffect(() => {
    localStorage.setItem("pizzas4", JSON.stringify(pizzas4));
  }, [pizzas4]);
  useEffect(() => {
    localStorage.setItem("burgers4", JSON.stringify(burgers4));
  }, [burgers4]);
  useEffect(() => {
    localStorage.setItem("drinks4", JSON.stringify(drinks4));
  }, [drinks4]);
  useEffect(() => {
    localStorage.setItem("finishes4", JSON.stringify(finishes4));
  }, [finishes4]);
  useEffect(() => {
    localStorage.setItem("checks4", JSON.stringify(checks4));
  }, [checks4]);
  ///////////////////////////////////5555555555555555555555555555555555555

  useEffect(() => {
    localStorage.setItem("cartItems5", JSON.stringify(cartItems5));
  }, [cartItems5]);
  useEffect(() => {
    localStorage.setItem("starts5", JSON.stringify(starts5));
  }, [starts5]);
  useEffect(() => {
    localStorage.setItem("pizzas5", JSON.stringify(pizzas5));
  }, [pizzas5]);
  useEffect(() => {
    localStorage.setItem("burgers5", JSON.stringify(burgers5));
  }, [burgers5]);
  useEffect(() => {
    localStorage.setItem("drinks5", JSON.stringify(drinks5));
  }, [drinks5]);
  useEffect(() => {
    localStorage.setItem("finishes5", JSON.stringify(finishes5));
  }, [finishes5]);
  useEffect(() => {
    localStorage.setItem("checks5", JSON.stringify(checks5));
  }, [checks5]);
  ///////////////////////////////////6666666666666666666666666666666666
  useEffect(() => {
    localStorage.setItem("cartItems6", JSON.stringify(cartItems6));
  }, [cartItems6]);
  useEffect(() => {
    localStorage.setItem("starts6", JSON.stringify(starts6));
  }, [starts6]);
  useEffect(() => {
    localStorage.setItem("pizzas6", JSON.stringify(pizzas6));
  }, [pizzas6]);
  useEffect(() => {
    localStorage.setItem("burgers6", JSON.stringify(burgers6));
  }, [burgers6]);
  useEffect(() => {
    localStorage.setItem("drinks6", JSON.stringify(drinks6));
  }, [drinks6]);
  useEffect(() => {
    localStorage.setItem("finishes6", JSON.stringify(finishes6));
  }, [finishes6]);
  useEffect(() => {
    localStorage.setItem("checks6", JSON.stringify(checks6));
  }, [checks6]);
  ///////////////////////////////////7777777777777777777777777777777777777

  useEffect(() => {
    localStorage.setItem("cartItems7", JSON.stringify(cartItems7));
  }, [cartItems7]);
  useEffect(() => {
    localStorage.setItem("starts7", JSON.stringify(starts7));
  }, [starts7]);
  useEffect(() => {
    localStorage.setItem("pizzas7", JSON.stringify(pizzas7));
  }, [pizzas7]);
  useEffect(() => {
    localStorage.setItem("burgers7", JSON.stringify(burgers7));
  }, [burgers7]);
  useEffect(() => {
    localStorage.setItem("drinks7", JSON.stringify(drinks7));
  }, [drinks7]);
  useEffect(() => {
    localStorage.setItem("finishes7", JSON.stringify(finishes7));
  }, [finishes7]);
  useEffect(() => {
    localStorage.setItem("checks7", JSON.stringify(checks7));
  }, [checks7]);
  ///////////////////////////////////88888888888888888888888888888888888888

  useEffect(() => {
    localStorage.setItem("cartItems8", JSON.stringify(cartItems8));
  }, [cartItems8]);
  useEffect(() => {
    localStorage.setItem("starts8", JSON.stringify(starts8));
  }, [starts8]);
  useEffect(() => {
    localStorage.setItem("pizzas8", JSON.stringify(pizzas8));
  }, [pizzas8]);
  useEffect(() => {
    localStorage.setItem("burgers8", JSON.stringify(burgers8));
  }, [burgers8]);
  useEffect(() => {
    localStorage.setItem("drinks8", JSON.stringify(drinks8));
  }, [drinks8]);
  useEffect(() => {
    localStorage.setItem("finishes8", JSON.stringify(finishes8));
  }, [finishes8]);
  useEffect(() => {
    localStorage.setItem("checks8", JSON.stringify(checks8));
  }, [checks8]);
  ///////////////////////////////////999999999999999999999999999999999999999

  useEffect(() => {
    localStorage.setItem("cartItems9", JSON.stringify(cartItems9));
  }, [cartItems9]);
  useEffect(() => {
    localStorage.setItem("starts9", JSON.stringify(starts9));
  }, [starts9]);
  useEffect(() => {
    localStorage.setItem("pizzas9", JSON.stringify(pizzas9));
  }, [pizzas9]);
  useEffect(() => {
    localStorage.setItem("burgers9", JSON.stringify(burgers9));
  }, [burgers9]);
  useEffect(() => {
    localStorage.setItem("drinks9", JSON.stringify(drinks9));
  }, [drinks9]);
  useEffect(() => {
    localStorage.setItem("finishes9", JSON.stringify(finishes9));
  }, [finishes9]);
  useEffect(() => {
    localStorage.setItem("checks9", JSON.stringify(checks9));
  }, [checks9]);
  ///////////////////////////////////1010101010110101010101010100110

  useEffect(() => {
    localStorage.setItem("cartItems10", JSON.stringify(cartItems10));
  }, [cartItems10]);
  useEffect(() => {
    localStorage.setItem("starts10", JSON.stringify(starts10));
  }, [starts10]);
  useEffect(() => {
    localStorage.setItem("pizzas10", JSON.stringify(pizzas10));
  }, [pizzas10]);
  useEffect(() => {
    localStorage.setItem("burgers10", JSON.stringify(burgers10));
  }, [burgers10]);
  useEffect(() => {
    localStorage.setItem("drinks10", JSON.stringify(drinks10));
  }, [drinks10]);
  useEffect(() => {
    localStorage.setItem("finishes10", JSON.stringify(finishes10));
  }, [finishes10]);
  useEffect(() => {
    localStorage.setItem("checks10", JSON.stringify(checks10));
  }, [checks10]);
  ///////////////////////////////////1010101010110101010101010100110
  //localStorage sup and adminCheck ||||||||||||||/////////////////
  //set total daily price of each table
  // console.log(adminChecks1);
  useEffect(() => {
    const totalTables = adminChecks1.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal1(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin1", JSON.stringify(adminChecks1));
  }, [adminChecks1]);
  useEffect(() => {
    const totalTables = adminChecks2.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal2(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin2", JSON.stringify(adminChecks2));
  }, [adminChecks2]);
  useEffect(() => {
    const totalTables = adminChecks3.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal3(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin3", JSON.stringify(adminChecks3));
  }, [adminChecks3]);
  useEffect(() => {
    const totalTables = adminChecks4.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal4(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin4", JSON.stringify(adminChecks4));
  }, [adminChecks4]);
  useEffect(() => {
    const totalTables = adminChecks5.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal5(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin5", JSON.stringify(adminChecks5));
  }, [adminChecks5]);
  useEffect(() => {
    const totalTables = adminChecks6.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal6(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin6", JSON.stringify(adminChecks6));
  }, [adminChecks6]);
  useEffect(() => {
    const totalTables = adminChecks7.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal7(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin7", JSON.stringify(adminChecks7));
  }, [adminChecks7]);
  useEffect(() => {
    const totalTables = adminChecks8.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal8(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin8", JSON.stringify(adminChecks8));
  }, [adminChecks8]);
  useEffect(() => {
    const totalTables = adminChecks9.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal9(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin9", JSON.stringify(adminChecks9));
  }, [adminChecks9]);
  useEffect(() => {
    const totalTables = adminChecks10.map((checks) => {
      return checks.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0);
    });
    setTotal10(totalTables.reduce((a, c) => a + c, 0));
    localStorage.setItem("checksAdmin10", JSON.stringify(adminChecks10));
  }, [adminChecks10]);

  ////////////////////////////////////////////////////

  ////////////////////ro'zonesha qati kaysas////////////////////////////////
  ////////////////////////////////////////////////////

  const allday1 = [
    total1,
    total2,
    total3,
    total4,
    total5,
    total6,
    total7,
    total8,
    total9,
    total10,
  ];
  const moveToDaily = () => {
    const day = allday1.reduce((a, c) => a + c, 0);
    setAdminChecks1([]);
    setAdminChecks2([]);
    setAdminChecks3([]);
    setAdminChecks4([]);
    setAdminChecks5([]);
    setAdminChecks6([]);
    setAdminChecks7([]);
    setAdminChecks8([]);
    setAdminChecks9([]);
    setAdminChecks10([]);
    axios
      .post("/api/sum", { d: day })
      .then((res) => {
        showSums();
      })
      .catch((err) => console.log(err));
  };
  const [sumdata, setSumData] = useState([]);
  const showSums = () => {
    axios
      .get("/products/dailysum")
      .then((res) => setSumData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    showSums();
  }, []);
  ////////////////authentication/////////////////////////////////
  ////////////////authentication/////////////////////////////////
  ////////////////authentication/////////////////////////////////
  const [isAuth, login, logout] = useAuth(false);
  const [isAd, isAdmn, notAdmn] = useAdmin(false);

  useEffect(() => {
    const jtoken = Cookies.get("webtoken");
    const admintoken = Cookies.get("admin");
    if (jtoken) {
      login();
    }
    if (admintoken) {
      isAdmn();
    }
    // console.log(typeof Cookies.get("admin"));
  });
  const logingOut = () => {
    axios
      .get("/products/logout")
      .then((res) => {
        logout();
        notAdmn();
        Cookies.remove("webtoken");
        Cookies.remove("admin");
      })
      .catch((err) => console.log(err));
  };
  const printFromLocal = JSON.parse(localStorage.getItem("prints")) || [];
  const numFromLocal = JSON.parse(localStorage.getItem("num")) || [];
  const [print, setPrint] = useState(printFromLocal);
  const [num, setNum] = useState(numFromLocal);
  const getCheckToPrint = (check, tableNum) => {
    setPrint(check);
    setNum(tableNum);
  };
  useEffect(() => {
    localStorage.setItem("prints", JSON.stringify(print));
    localStorage.setItem("num", JSON.stringify(num));
  }, [print, num]);
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/print"
          exact
          render={(props) => <PrintCheck {...props} print={print} num={num} />}
        />
        <Route
          path="/"
          render={(props) =>
            isAuth && window.location.pathname !== "/print" ? (
              <Table
                s1={finishes.length}
                s2={finishes2.length}
                s3={finishes3.length}
                s4={finishes4.length}
                s5={finishes5.length}
                s6={finishes6.length}
                s7={finishes7.length}
                s8={finishes8.length}
                s9={finishes9.length}
                s10={finishes10.length}
                b1={burgers.length}
                b2={burgers2.length}
                b3={burgers3.length}
                b4={burgers4.length}
                b5={burgers5.length}
                b6={burgers6.length}
                b7={burgers7.length}
                b8={burgers8.length}
                b9={burgers9.length}
                b10={burgers10.length}
                p1={pizzas.length}
                p2={pizzas2.length}
                p3={pizzas3.length}
                p4={pizzas4.length}
                p5={pizzas5.length}
                p6={pizzas6.length}
                p7={pizzas7.length}
                p8={pizzas8.length}
                p9={pizzas9.length}
                p10={pizzas10.length}
                d1={drinks.length}
                d2={drinks2.length}
                d3={drinks3.length}
                d4={drinks4.length}
                d5={drinks5.length}
                d6={drinks6.length}
                d7={drinks7.length}
                d8={drinks8.length}
                d9={drinks9.length}
                d10={drinks10.length}
              />
            ) : null
          }
        />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/table1"
            exact
            render={(props) =>
              isAuth ? (
                <Table1
                  {...props}
                  cartItems={cartItems}
                  starts={starts}
                  burgers={burgers}
                  pizzas={pizzas}
                  drinks={drinks}
                  finishes={finishes}
                  checks={checks}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  moveToStart={moveToStart}
                  deleteStart={deleteStart}
                  fromStartToKitchen={fromStartToKitchen}
                  fromKitchenToFinish={fromKitchenToFinish}
                  fromFinishToCheck={fromFinishToCheck}
                  getChecks={getChecks}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/table2"
            exact
            render={(props) =>
              isAuth ? (
                <Table2
                  {...props}
                  cartItems2={cartItems2}
                  starts2={starts2}
                  burgers2={burgers2}
                  pizzas2={pizzas2}
                  drinks2={drinks2}
                  finishes2={finishes2}
                  checks2={checks2}
                  onAdd2={onAdd2}
                  onRemove2={onRemove2}
                  moveToStart2={moveToStart2}
                  deleteStart2={deleteStart2}
                  fromStartToKitchen2={fromStartToKitchen2}
                  fromKitchenToFinish2={fromKitchenToFinish2}
                  fromFinishToCheck2={fromFinishToCheck2}
                  getChecks2={getChecks2}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/table3"
            exact
            render={(props) =>
              isAuth ? (
                <Table3
                  {...props}
                  cartItems3={cartItems3}
                  starts3={starts3}
                  burgers3={burgers3}
                  pizzas3={pizzas3}
                  drinks3={drinks3}
                  finishes3={finishes3}
                  checks3={checks3}
                  onAdd3={onAdd3}
                  onRemove3={onRemove3}
                  moveToStart3={moveToStart3}
                  deleteStart3={deleteStart3}
                  fromStartToKitchen3={fromStartToKitchen3}
                  fromKitchenToFinish3={fromKitchenToFinish3}
                  fromFinishToCheck3={fromFinishToCheck3}
                  getChecks3={getChecks3}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/table4"
            exact
            render={(props) =>
              isAuth ? (
                <Table4
                  {...props}
                  cartItems4={cartItems4}
                  starts4={starts4}
                  burgers4={burgers4}
                  pizzas4={pizzas4}
                  drinks4={drinks4}
                  finishes4={finishes4}
                  checks4={checks4}
                  onAdd4={onAdd4}
                  onRemove4={onRemove4}
                  moveToStart4={moveToStart4}
                  deleteStart4={deleteStart4}
                  fromStartToKitchen4={fromStartToKitchen4}
                  fromKitchenToFinish4={fromKitchenToFinish4}
                  fromFinishToCheck4={fromFinishToCheck4}
                  getChecks4={getChecks4}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/table5"
            exact
            render={(props) =>
              isAuth ? (
                <Table5
                  {...props}
                  cartItems5={cartItems5}
                  starts5={starts5}
                  burgers5={burgers5}
                  pizzas5={pizzas5}
                  drinks5={drinks5}
                  finishes5={finishes5}
                  checks5={checks5}
                  onAdd5={onAdd5}
                  onRemove5={onRemove5}
                  moveToStart5={moveToStart5}
                  deleteStart5={deleteStart5}
                  fromStartToKitchen5={fromStartToKitchen5}
                  fromKitchenToFinish5={fromKitchenToFinish5}
                  fromFinishToCheck5={fromFinishToCheck5}
                  getChecks5={getChecks5}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/table6"
            exact
            render={(props) =>
              isAuth ? (
                <Table6
                  {...props}
                  cartItems6={cartItems6}
                  starts6={starts6}
                  burgers6={burgers6}
                  pizzas6={pizzas6}
                  drinks6={drinks6}
                  finishes6={finishes6}
                  checks6={checks6}
                  onAdd6={onAdd6}
                  onRemove6={onRemove6}
                  moveToStart6={moveToStart6}
                  deleteStart6={deleteStart6}
                  fromStartToKitchen6={fromStartToKitchen6}
                  fromKitchenToFinish6={fromKitchenToFinish6}
                  fromFinishToCheck6={fromFinishToCheck6}
                  getChecks6={getChecks6}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/table7"
            exact
            render={(props) =>
              isAuth ? (
                <Table7
                  {...props}
                  cartItems7={cartItems7}
                  starts7={starts7}
                  burgers7={burgers7}
                  pizzas7={pizzas7}
                  drinks7={drinks7}
                  finishes7={finishes7}
                  checks7={checks7}
                  onAdd7={onAdd7}
                  onRemove7={onRemove7}
                  moveToStart7={moveToStart7}
                  deleteStart7={deleteStart7}
                  fromStartToKitchen7={fromStartToKitchen7}
                  fromKitchenToFinish7={fromKitchenToFinish7}
                  fromFinishToCheck7={fromFinishToCheck7}
                  getChecks7={getChecks7}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/table8"
            exact
            render={(props) =>
              isAuth ? (
                <Table8
                  {...props}
                  cartItems8={cartItems8}
                  starts8={starts8}
                  burgers8={burgers8}
                  pizzas8={pizzas8}
                  drinks8={drinks8}
                  finishes8={finishes8}
                  checks8={checks8}
                  onAdd8={onAdd8}
                  onRemove8={onRemove8}
                  moveToStart8={moveToStart8}
                  deleteStart8={deleteStart8}
                  fromStartToKitchen8={fromStartToKitchen8}
                  fromKitchenToFinish8={fromKitchenToFinish8}
                  fromFinishToCheck8={fromFinishToCheck8}
                  getChecks8={getChecks8}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/table9"
            exact
            render={(props) =>
              isAuth ? (
                <Table9
                  {...props}
                  cartItems9={cartItems9}
                  starts9={starts9}
                  burgers9={burgers9}
                  pizzas9={pizzas9}
                  drinks9={drinks9}
                  finishes9={finishes9}
                  checks9={checks9}
                  onAdd9={onAdd9}
                  onRemove9={onRemove9}
                  moveToStart9={moveToStart9}
                  deleteStart9={deleteStart9}
                  fromStartToKitchen9={fromStartToKitchen9}
                  fromKitchenToFinish9={fromKitchenToFinish9}
                  fromFinishToCheck9={fromFinishToCheck9}
                  getChecks9={getChecks9}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/table10"
            exact
            render={(props) =>
              isAuth ? (
                <Table10
                  {...props}
                  cartItems10={cartItems10}
                  starts10={starts10}
                  burgers10={burgers10}
                  pizzas10={pizzas10}
                  drinks10={drinks10}
                  finishes10={finishes10}
                  checks10={checks10}
                  onAdd10={onAdd10}
                  onRemove10={onRemove10}
                  moveToStart10={moveToStart10}
                  deleteStart10={deleteStart10}
                  fromStartToKitchen10={fromStartToKitchen10}
                  fromKitchenToFinish10={fromKitchenToFinish10}
                  fromFinishToCheck10={fromFinishToCheck10}
                  getChecks10={getChecks10}
                  data={data}
                />
              ) : null
            }
          />
          <Route
            path="/admin/:id"
            exact
            render={(props) =>
              isAd ? (
                <AdminPage
                  {...props}
                  adminChecks1={adminChecks1}
                  adminChecks2={adminChecks2}
                  adminChecks3={adminChecks3}
                  adminChecks4={adminChecks4}
                  adminChecks5={adminChecks5}
                  adminChecks6={adminChecks6}
                  adminChecks7={adminChecks7}
                  adminChecks8={adminChecks8}
                  adminChecks9={adminChecks9}
                  adminChecks10={adminChecks10}
                  total1={total1}
                  total2={total2}
                  total3={total3}
                  total4={total4}
                  total5={total5}
                  total6={total6}
                  total7={total7}
                  total8={total8}
                  total9={total9}
                  total10={total10}
                  moveToDaily={moveToDaily}
                  allday1={allday1}
                  sumdata={sumdata}
                  getCheckToPrint={getCheckToPrint}
                />
              ) : null
            }
          />
          <Route
            path="/burgerer"
            exact
            render={(props) =>
              isAuth ? (
                <Burgerer
                  {...props}
                  burgers={burgers}
                  finishes={finishes}
                  fromKitchenToFinish={fromKitchenToFinish}
                  burgers2={burgers2}
                  finishes2={finishes2}
                  fromKitchenToFinish2={fromKitchenToFinish2}
                  burgers3={burgers3}
                  finishes3={finishes3}
                  fromKitchenToFinish3={fromKitchenToFinish3}
                  burgers4={burgers4}
                  finishes4={finishes4}
                  fromKitchenToFinish4={fromKitchenToFinish4}
                  burgers5={burgers5}
                  finishes5={finishes5}
                  fromKitchenToFinish5={fromKitchenToFinish5}
                  burgers6={burgers6}
                  finishes6={finishes6}
                  fromKitchenToFinish6={fromKitchenToFinish6}
                  burgers7={burgers7}
                  finishes7={finishes7}
                  fromKitchenToFinish7={fromKitchenToFinish7}
                  burgers8={burgers8}
                  finishes8={finishes8}
                  fromKitchenToFinish8={fromKitchenToFinish8}
                  burgers9={burgers9}
                  finishes9={finishes9}
                  fromKitchenToFinish9={fromKitchenToFinish9}
                  burgers10={burgers10}
                  finishes10={finishes10}
                  fromKitchenToFinish10={fromKitchenToFinish10}
                />
              ) : null
            }
          />
          <Route
            path="/pizzarer"
            exact
            render={(props) =>
              isAuth ? (
                <Pizzarer
                  {...props}
                  pizzas={pizzas}
                  finishes={finishes}
                  fromKitchenToFinish={fromKitchenToFinish}
                  pizzas2={pizzas2}
                  finishes2={finishes2}
                  fromKitchenToFinish2={fromKitchenToFinish2}
                  pizzas3={pizzas3}
                  finishes3={finishes3}
                  fromKitchenToFinish3={fromKitchenToFinish3}
                  pizzas4={pizzas4}
                  finishes4={finishes4}
                  fromKitchenToFinish4={fromKitchenToFinish4}
                  pizzas5={pizzas5}
                  finishes5={finishes5}
                  fromKitchenToFinish5={fromKitchenToFinish5}
                  pizzas6={pizzas6}
                  finishes6={finishes6}
                  fromKitchenToFinish6={fromKitchenToFinish6}
                  pizzas7={pizzas7}
                  finishes7={finishes7}
                  fromKitchenToFinish7={fromKitchenToFinish7}
                  pizzas8={pizzas8}
                  finishes8={finishes8}
                  fromKitchenToFinish8={fromKitchenToFinish8}
                  pizzas9={pizzas9}
                  finishes9={finishes9}
                  fromKitchenToFinish9={fromKitchenToFinish9}
                  pizzas10={pizzas10}
                  finishes10={finishes10}
                  fromKitchenToFinish10={fromKitchenToFinish10}
                />
              ) : null
            }
          />
          <Route
            path="/drinker"
            exact
            render={(props) =>
              isAuth ? (
                <Drinker
                  {...props}
                  drinks={drinks}
                  finishes={finishes}
                  fromKitchenToFinish={fromKitchenToFinish}
                  drinks2={drinks2}
                  finishes2={finishes2}
                  fromKitchenToFinish2={fromKitchenToFinish2}
                  drinks3={drinks3}
                  finishes3={finishes3}
                  fromKitchenToFinish3={fromKitchenToFinish3}
                  drinks4={drinks4}
                  finishes4={finishes4}
                  fromKitchenToFinish4={fromKitchenToFinish4}
                  drinks5={drinks5}
                  finishes5={finishes5}
                  fromKitchenToFinish5={fromKitchenToFinish5}
                  drinks6={drinks6}
                  finishes6={finishes6}
                  fromKitchenToFinish6={fromKitchenToFinish6}
                  drinks7={drinks7}
                  finishes7={finishes7}
                  fromKitchenToFinish7={fromKitchenToFinish7}
                  drinks8={drinks8}
                  finishes8={finishes8}
                  fromKitchenToFinish8={fromKitchenToFinish8}
                  drinks9={drinks9}
                  finishes9={finishes9}
                  fromKitchenToFinish9={fromKitchenToFinish9}
                  drinks10={drinks10}
                  finishes10={finishes10}
                  fromKitchenToFinish10={fromKitchenToFinish10}
                />
              ) : null
            }
          />
          <Route
            path="/productpage/:id"
            exact
            render={(props) =>
              isAd ? (
                <ProductPage {...props} data={data} showthat={showthat} />
              ) : null
            }
          />
          <Route
            path="/editmenuitem"
            exact
            render={(props) =>
              isAd ? <ProductEdit {...props} showthat={showthat} /> : null
            }
          />
          <Route
            path="/editmenu"
            exact
            render={(props) =>
              isAd ? <ProductMenuEdit {...props} showthat={showthat} /> : null
            }
          />
          <Route
            path="/signup"
            exact
            render={(props) =>
              isAd ? <Signup {...props} login={login} isAdmn={isAdmn} /> : null
            }
          />
          <Route
            path="/login"
            exact
            render={(props) => (
              <Login {...props} login={login} isAdmn={isAdmn} />
            )}
          />
        </Switch>
        {!isAuth ? (
          <Link to="/login">
            <button>login</button>
          </Link>
        ) : window.location.pathname !== "/print" ? (
          <Link to="/">
            <button onClick={logingOut}>logout</button>
          </Link>
        ) : null}
      </BrowserRouter>
    </div>
  );
}

export default App;
