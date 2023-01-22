import './styles.css'
import { ContextMenu } from './menu';
import { TimerModule } from './modules/timer.module';

const contextMenu = new ContextMenu('.menu');
const timer = new TimerModule('123', 'Таймер')

contextMenu.open()

//================TIMER==============//
contextMenu.add(timer)
timer.trigger()
