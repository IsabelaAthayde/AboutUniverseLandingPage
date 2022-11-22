function homeOff() {
    document.querySelector("#home").style.fontWeight = "400";
    document.querySelector("#home").style.color = "var(--nav-txt)";
} 


function universoOff() {
    document.querySelector("#universe").style.fontWeight = "400";
    document.querySelector("#universe").style.color = "var(--nav-txt)";
}
function explorationOff() {
    document.querySelector("#exploracao").style.fontWeight = "400";
    document.querySelector("#exploracao").style.color = "var(--nav-txt)";
}

export class Router {

    routes = { };

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)
        this.handle()
    }

    handle() {

        let { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        
        fetch(route)
        .then(data => data.text())
        .then(html => {
            this.clickedPage(route)
            document.querySelector("#app").innerHTML = html;
            
        }) }

        clickedPage(route) {

            if(route == "/pages/home.html"){
                document.querySelector("#home").style.fontWeight = "700";
                document.querySelector("#home").style.color = "white";

                universoOff()
                explorationOff()
            } else if(route == "/pages/universo.html") {
                document.querySelector("#universe").style.fontWeight = "700";
                document.querySelector("#universe").style.color = "white";

                homeOff()
                explorationOff()
            } else if(route == "/pages/exploracao.html"){
                document.querySelector("#exploracao").style.fontWeight = "700";
                document.querySelector("#exploracao").style.color = "white";

                homeOff()
                universoOff()}
        }

       
}