<<<<<<<< HEAD:android/app/src/main/java/com/anybuyapp/app/MainActivity.java
package com.anybuyapp.app;
========
package com.matchapp.app;
>>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c:android/app/src/main/java/com/matchapp/app/MainActivity.java
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {


  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
<<<<<<<< HEAD:android/app/src/main/java/com/anybuyapp/app/MainActivity.java
    return "AnyBuy";
========
    return "MatchApp";
>>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c:android/app/src/main/java/com/matchapp/app/MainActivity.java
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
