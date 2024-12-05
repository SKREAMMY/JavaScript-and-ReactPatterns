import Observable from "./observable.js";

export function sendToGoogleAnalytics(data) {
    console.log("sent to google analytics");

}

export function sendtoEmail(data) {
    console.log("sent Email");

}

console.log("subscribing to analytics");

Observable.subscribe(sendToGoogleAnalytics);
Observable.subscribe(sendtoEmail);