import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IBeacon, IBeaconPluginResult } from '@ionic-native/ibeacon';
import { Vibration } from '@ionic-native/vibration';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  private uuid = 'fda50693-a4e2-4fb1-afcf-c6eb07647825';
  beaconData = {};
  beaconUuid: String;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private ibeacon: IBeacon, private vibration: Vibration) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.startBeacons();
    });
  }

  public startBeacons(): void {
    var event = document.createEvent("Event");
    event.initEvent('regionEntered', true, true);
    // Request permission to use location on iOS
    this.ibeacon.requestAlwaysAuthorization();
    // create a new delegate and register it with the native layer
    const delegate = this.ibeacon.Delegate();

    this.ibeacon.setDelegate(delegate);
    this.beaconUuid = this.uuid;
    // Subscribe to some of the delegate's event handlers
    delegate.didRangeBeaconsInRegion().subscribe(
      (pluginResult: IBeaconPluginResult) => {},
      (error: any) => console.error(`Failure during ranging: `, error)
    );
    delegate.didStartMonitoringForRegion().subscribe(
      (pluginResult: IBeaconPluginResult) => {},
      (error: any) => console.error(`Failure during starting of monitoring: `, error)
    );

    delegate.didEnterRegion().subscribe(
      (pluginResult: IBeaconPluginResult) => {
        this.vibration.vibrate(100);
        console.log('didEnterRegion: ', pluginResult);
        this.beaconData = pluginResult;
        document.dispatchEvent(new CustomEvent('enteredRegion', {bubbles: true, detail: pluginResult}));
      }
    );

    delegate.didExitRegion().subscribe(
      (pluginResult: IBeaconPluginResult) => {
        this.vibration.vibrate(100);
        console.log('didExitRegion: ', pluginResult);
        document.dispatchEvent(new CustomEvent('exitRegion', {bubbles: true, detail: pluginResult}));
      }
    );

    console.log(`Creating BeaconRegion with UUID of: `, this.uuid);
    const beaconRegion = this.ibeacon.BeaconRegion('LivingRoom', this.uuid);

    this.ibeacon.startMonitoringForRegion(beaconRegion).then(
      () => console.log('Native layer recieved the request to monitoring'),
      (error: any) => console.error('Native layer failed to begin monitoring: ', error)
    );

    this.ibeacon.startRangingBeaconsInRegion(beaconRegion)
      .then(() => {
        console.log(`Started ranging beacon region: `, beaconRegion);
      })
      .catch((error: any) => {
        console.error(`Failed to start ranging beacon region: `, beaconRegion);
      });
  }
}

