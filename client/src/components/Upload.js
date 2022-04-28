import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuickChat from './QuickChat/QuickChat';
import QuickSidebar from './QuickChat/QuickSidebar';

import './QuickChat/QuickChat.css';

function Quickchat() {

  return (
    <div className="quickchat">
      <div className="quickchat__body">
        <Router>
        <QuickSidebar />
          <Switch>
           <Route path = "/rooms/:roomId">
            <QuickChat />

            </Route>

            <Route path="/">
              <QuickChat />
            
            </Route>
          </Switch>
        </Router>
      </div>
  
    </div>
  );
}
 
export default Quickchat;
