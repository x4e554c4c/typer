import {throttle} from 'throttle-debounce'

export interface Listener {
    (event: string) : void
}

export interface Breakpoints {
    [key: string] : number
}

export class Observer 
{
    private _listeners: Listener[] = []

    private _current: string = '';
    
    public readonly breakpoints: Breakpoints = {};
 
    constructor(breakpoints: Breakpoints, delay: number = 200) {
        this.breakpoints = breakpoints;
        this.decide();

        let throtteled: () => void = 
            throttle(delay, this.decide.bind(this))
        
        window.addEventListener('resize', throtteled);
    }

    private set(resolution: string): void {
        this._current = resolution;

        for (let callback of this._listeners)
            callback(this._current);
    }

    private decide(): void {
        let width: number = window.innerWidth;

        for (let name in this.breakpoints) {
            let point = this.breakpoints[name];

            if (width > point)
                continue
            
            if (name !== this._current)
                this.set(name)

            break;
        }
    }

    public listen(callback: Listener): boolean {
        let index: number = 
            this._listeners.indexOf(callback);

        if (index !== -1)
            return false;

        this._listeners.push(callback)
        return true;
    }

    public detach(callback: Listener) {
        let index: number = 
            this._listeners.indexOf(callback);

        if (index === -1)
            return false;

        this._listeners.splice(index, 1)
        return true;
    }

    public bind(callback: Listener): boolean {
        if (!!!this.listen(callback))
            return false;

        callback(this._current);
        return true;
    }

    public current(): string {
        return this._current
    }
}