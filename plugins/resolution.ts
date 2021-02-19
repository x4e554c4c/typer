import { Observer, Breakpoints } from '@/services/Resolution'
import { reactive } from '@nuxtjs/composition-api'
import { Plugin } from '@nuxt/types'

class ResolutionAdapter {

  private breakpoints: Breakpoints = {
    'mobile': 800,
    'laptop': 1200,
    'desktop': Infinity
  };

  private delay: number = 100; 

  public resolution: {[key: string] : boolean}  = {} 

  constructor() {
    if (process.client)
      this.watch();
    else 
      this.dummy();
  }

  private watch(): void  {
    let watcher = new Observer(this.breakpoints, this.delay);

    watcher.bind(this.update.bind(this));
  }

  private dummy(): void {
    this.update('');  
  }

  private update(current: string): void {
    for (let key in this.breakpoints)
      this.resolution[key] = key === current;
  }
}

const plugin : Plugin = (context, inject) => {
  let adapter = new ResolutionAdapter();
  let computed = reactive(adapter.resolution);

  inject('resolution', computed);
}

export default plugin;