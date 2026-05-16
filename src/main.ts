import 'modern-normalize/modern-normalize.css'
import './global.css'
import { mount } from 'svelte'
import App from './App.svelte'

mount(App, { target: document.getElementById('root')! })
