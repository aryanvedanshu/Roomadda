import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import EditProfile from '../components/EditProfile';
import Services from '../pages/Services';
import Booking from '../components/Booking';
import Location from '../components/Location';
import Community from '../components/Community';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/services" element={<Services />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/location" element={<Location />} />
      <Route path="/community" element={<Community />} />
    </Switch>
  );
};
