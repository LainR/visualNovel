// Modules to control application life and create native browser window

const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

// Set the path where recordings will be saved
app.setPath("userData", __dirname + "/saved_recordings")


function createWindow () {
  // Create the browser window.
  // const mainWindow = new BrowserWindow({
  //   width: 800,
  //   height: 600,
  //   webPreferences: {
  //     preload: path.join(__dirname, 'preload.js'),
  //     nodeIntegration: true
  //   }
  // })

  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))


  // mainWindow.loadURL(url.format({
  //    pathname: path.join(__dirname, 'index.html'),
  //    protocol: 'file:',
  //    slashes: true
  // }))
  // and load the index.html of the app.
  // mainWindow.loadFile('speechRecognition.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// Restrospective Aspect
// const express = require('express')
// const webApp = express()
//
// webApp.get('/', function (req, res) {
//   res.sendFile('index.html' , { root : __dirname});
// })
//
// webApp.get('/js/artyom.js', function (req, res) {
//   res.sendFile('js/artyom.js' , { root : __dirname});
// })
//
// webApp.listen(7777)


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
