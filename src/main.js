import { routes } from 'svelte-hash-router'
import App from './App.svelte'
import Home from './view/Home.svelte'	
 
routes.set({
  '/': Home,
})
 
export default new App({ target: document.body })