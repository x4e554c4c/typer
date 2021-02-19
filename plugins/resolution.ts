import { Observer, Breakpoints } from '@/services/Resolution'
import { Plugin } from '@nuxt/types'
import { reactive } from '@nuxtjs/composition-api'


interface Resolution { 
  [key: string] : boolean
}

class ResolutionAdapter {

  private breakpoints: Breakpoints = {
    'mobile': 800,
    'laptop': 1200,
    'desktop': Infinity
  };

  public resolution: Resolution  = {} 

  constructor() {
    if (process.client)
      this.watch();
    else 
      this.dummy();
  }

  private watch(): void  {
    let watcher = new Observer(this.breakpoints);

    watcher.bind(this.update.bind(this));
  }

  private dummy(): void {
    this.update('');  
  }

  private update(current: string): void {
    console.log('update');
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