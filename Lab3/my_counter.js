class MySpan extends HTMLElement{
    constructor(){
        super();
        this.shadow = this. attachShadow({mode: "open"});
    }
    get value(){
        return this.getAttribute("value");
    }
    set value(val){
        this.setAttribute("value", val);
    }
    
    static get observedAttributes(){
        return ["value"];
    }

    attributeChangedCallback(prop, oldVal, newVal){
        if(prop ==="value") this.render();
    }

    connectedCallback(){
        this.render();
    }
    render(){
        this.shadow.innerHTML=`
        ${this.value}`;
    }
}
customElements.define('my-span',MySpan);