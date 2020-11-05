import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow | null;
let serverWindow: Electron.BrowserWindow | null;

function createWindow() {

    serverWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    });

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    if (process.env.NODE_ENV === 'development') {
        serverWindow.loadURL(url.format({
            pathname: path.join(__dirname, './server/index.html'),
            protocol: 'file:',
            slashes: false
        }))
        mainWindow.loadURL(`http://localhost:4000`);
    } else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, '../index.html'),
                protocol: 'file:',
                slashes: true
            })
        );
    }

    let contents = serverWindow.webContents
    console.log(contents)

    contents.on('did-fail-load', (errorCode , errorDescription, validatedURL) => {
        console.log('Loading failed');
        console.log(errorCode);
        console.log(errorDescription);
        console.log(validatedURL);
    })

    serverWindow.on('closed', () => {
        serverWindow = null;
    });

    // mainWindow.on('closed', () => {
    //     mainWindow = null;
    // });
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;
