import './interfaces/all';

class Girl implements Human {

    constructor() {

    }

    _gender = 'female';

    public get gender() {
        return this._gender;
    }
}


window.onload = function() {

    let girl = new Girl;

    let node = document.createElement('div');
    
    node.innerHTML = girl.gender;
    document.body.appendChild(node);

};


