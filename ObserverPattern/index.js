// The primary motivation behind the Observer Pattern
// is to establish a robust communication channel
// between objects while minimizing dependencies.
// By enabling objects to react to changes in the
// state of another object without being tightly coupled
// , this pattern enhances the modularity and
// extensibility of the software.

import Observable from "./observable.js";
import "./analytics.js";

// Youtube Subscription : When a user(Observer)
// subscribes to a Youtube channel(Subject) all its
// subscribers get notified of any new post. Group
// Chat Application : Group(Subject) and its
// members(Observer), when some message is added
// to group its members instantly get updated. Weather
// Forecasting. Stock




const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
// console.log("from script");


button1.addEventListener('click', () => {
    const data = "button1 clicked";
    //doing some operation on button click.
    // sendDatatoGoogleAnalytics(data);
    //sendtosomeanalytics(data);
    //sendtoemail(data);

    // to notify via observable
    console.log("b1 clicked");

    Observable.notify(data);
})

button2.addEventListener('click', () => {
    const data = "button2 clicked";
    //doing some operation on button click.
    // sendDatatoGoogleAnalytics(data);
    //sendtosomeanalytics(data);
    //sendtoemail(data);
    console.log("b2 clicked");

    Observable.notify(data);

})