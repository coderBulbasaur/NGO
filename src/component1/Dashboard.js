import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import logo1 from '../component1/logo1.png';

// import './Sheet.css'; 
// import './Dashboard.css';

const Dashboard = () => {
  useEffect(() => {
    const counter = document.querySelector(".counter");

    if(!counter){
      console.error("Counter Element Not found")
    }

    let count = 0;

    const intervalId = setInterval(() => {
      if (count === 92) {
        clearInterval (intervalId);
      } else {
        count += 1;
        counter.textContent = count + "%";
      }
    }, 42);

    return () => clearInterval(intervalId);
  }, []); 

  const customStyles=`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");
:root {
  --delay: 0s;
}

* {
  outline: none;
  box-sizing: border-box;
}

.hidden {
  display: none !important;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
}

body {
  font-family: "Inter", sans-serif;
  background-color: #252954;
  color: #9b9ca7;
  background: #2f2f2f;
}

.wrapper {
  max-width: 1600px;
  background-color: #0e0e23;
  display: flex;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
}

.left-side {
  width: 6rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  padding: 117px 0 40px;
  -webkit-animation: left 1s var(--delay) both;
          animation: left 1s var(--delay) both;
}
.left-side svg {
  width: 24px;
  cursor: pointer;
}
.left-side svg + svg {
  margin-top: 34px;
}
.left-side svg:last-child {
  margin-top: auto;
}
.left-side svg.active, .left-side svg:hover {
  color: #4255d4;
}

@-webkit-keyframes left {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes left {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@-webkit-keyframes top {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes top {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 25px;
  overflow: auto;
  padding-left: 0;
}

.header {
  background: #141834;
  background: radial-gradient(circle, #141834 0%, #13162f 100%);
  box-shadow: 0 16px 12px #0e0e23;
  width: 100%;
  padding: 0 30px;
  -webkit-animation: top 1s both;
          animation: top 1s both;
  display: flex;
  align-items: center;
  border-radius: 6px;
  font-size: 15px;
  white-space: nowrap;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
}
.header:before {
  content: "";
  width: 100%;
  height: 25px;
  position: absolute;
  top: -25px;
  left: 0;
  background-color: #0e0e23;
}
.header-link {
  color: #9b9ca7;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 20px;
  transition: 0.3s;
  border-bottom: 3px solid transparent;
  transition: 0.3s;
}
.header-link svg {
  width: 20px;
  margin-right: 14px;
}
.header-link.active, .header-link:hover {
  background: #11132c;
  border-bottom: 3px solid #4255d4;
}

.logo {
  padding: 20px 50px 20px 0;
  font-size: 16px;
  color: #e7e8ea;
}
.logo-det {
  background: #4255d4;
  padding: 8px;
  margin-left: -2px;
  border-radius: 50%;
  font-size: 15px;
}

.user-info {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.user-info svg {
  width: 20px;
}
.user-info .profile {
  margin: 0 20px 0 12px;
  width: 18px;
}

.button {
  display: flex;
  align-items: center;
  color: #9b9ca7;
  background: #1a1b3c;
  border: none;
  padding: 2px 12px;
  border-radius: 4px;
  margin-right: 20px;
}
.button svg {
  margin-left: 10px;
  width: 16px;
}

.user-box {
  margin-top: 25px;
  display: flex;
}
.user-box + .user-box {
  margin-top: 20px;
}
.user-box + .user-box .cards-wrapper {
  margin-left: 0;
  flex-grow: 1;
  max-width: none;
}
.user-box + .user-box .today {
  margin-left: 30px;
}
.user-box + .user-box .cards-header {
  padding: 20px 30px;
  justify-content: space-between;
}
.user-box .cards-header,
.user-box .cards-view {
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-box .cards-header svg,
.user-box .cards-view svg {
  width: 24px;
}
.user-box .cards-header .title,
.user-box .cards-view .title {
  margin: 0 16px;
  font-size: 15px;
}
.user-box .cards-header-date svg,
.user-box .cards-view-date svg {
  width: 30px;
}
.user-box .cards-header .cards-button,
.user-box .cards-view .cards-button {
  background: #15193c;
  padding: 10px 16px;
  margin-right: 0;
}
.user-box .cards-header .cards-button svg,
.user-box .cards-view .cards-button svg {
  width: 16px;
  margin: 0 2px 0 0;
}
.user-box .cards-header .date-wrapper,
.user-box .cards-view .date-wrapper {
  display: flex;
  align-items: center;
  margin: auto;
}
.user-box .cards-header .date-wrapper .title,
.user-box .cards-view .date-wrapper .title {
  margin: 0 16px;
}

.cards-view > svg {
  margin-right: 12px;
}

.today {
  position: relative;
}
.today:before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #ef415c;
  bottom: -8px;
  right: 50%;
  border-radius: 50%;
}

.card {
  background: #1a2049;
  background: radial-gradient(circle, #1a2049 0%, #13162f 100%);
  padding: 40px 30px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 430px;
  width: 100%;
}
.card .title {
  font-size: 16px;
  font-weight: 500;
}
.card .subtitle {
  font-size: 13px;
  line-height: 1.6em;
}
.card + .card {
  margin-left: 20px;
}

.activity {
  max-width: 480px;
}
.activity .title {
  margin-bottom: 20px;
}
.activity-links {
  display: flex;
  align-items: center;
  margin-top: auto;
  font-size: 15px;
}
.activity-link {
  padding-bottom: 10px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}
.activity-link + .activity-link {
  margin-left: 25px;
}
.activity-link + .activity-link:before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #ef415c;
  top: -2px;
  right: -8px;
  border-radius: 50%;
}
.activity-link + .activity-link:hover:after {
  content: "";
  position: absolute;
  width: 22px;
  height: 2px;
  background: #4255d4;
  left: 0;
  bottom: 0;
}
.activity-link + .activity-link:hover {
  color: #bebec4;
  -webkit-text-stroke: 0.3px;
}
.activity-link.active {
  color: #bebec4;
  font-weight: 500;
}
.activity-link.active:before {
  content: "";
  position: absolute;
  width: 22px;
  height: 2px;
  background: #4255d4;
  left: 0;
  bottom: 0;
}

.destination {
  display: flex;
  align-items: center;
  margin-top: auto;
}
.destination-card {
  background: #1a1d3a;
  background: linear-gradient(45deg, #1a1d3a 0%, #212752 100%);
  padding: 20px;
  width: 100%;
  border-radius: 6px;
}
.destination-card + .destination-card {
  margin-left: 20px;
  background: #1a1d3a;
  background: linear-gradient(325deg, #1a1d3a 0%, #212752 100%);
}
.destination-profile {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.destination-profile svg {
  width: 18px;
  flex-shrink: 0;
  margin-right: 8px;
}
.destination-length {
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 13px;
}
.destination-points {
  margin-top: 30px;
}

.profile-img {
  width: 46px;
  height: 46px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid #bebec4;
  flex-shrink: 0;
}

.point {
  font-size: 14px;
  color: #bebec4;
  font-weight: 500;
}

.sub-point {
  font-size: 13px;
  margin-top: 4px;
}

.discount {
  max-width: 320px;
  width: 100%;
}
.discount .title {
  margin-bottom: 30px;
}
.discount .subtitle {
  margin-bottom: 8px;
}
.discount .subtitle-count {
  font-size: 17px;
  color: #17a98a;
  font-weight: 500;
}
.discount .subtitle-count + .subtitle {
  margin-top: 20px;
}
.discount .subtitle-count.dist {
  color: #e85471;
}
.discount-wrapper {
  display: flex;
}
.discount-chart {
  margin-left: auto;
}
.discount-profile {
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.discount-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  -o-object-fit: cover;
     object-fit: cover;
  margin: 0 16px 0 12px;
}
.discount-name {
  font-weight: 500;
  font-size: 15px;
}
.discount-type {
  font-size: 13px;
  margin-top: 4px;
}

.circle {
  width: 100px;
  height: 100px;
  border: 3px solid #5b5f78;
  border-radius: 50%;
  position: relative;
}

.pie {
  position: relative;
  width: 120px;
  height: 120px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
}
.pie svg circle {
  fill: transparent;
  stroke: #4356d6;
  stroke-width: 14;
  stroke-dasharray: 275;
  stroke-dashoffset: 235;
  -webkit-animation: pieChart 3.8s linear forwards;
          animation: pieChart 3.8s linear forwards;
}

@-webkit-keyframes pieChart {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes pieChart {
  100% {
    stroke-dashoffset: 0;
  }
}
.counter {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #3e50c5;
  font-weight: 500;
}

.offer-button {
  background: #4255d4;
  padding: 14px;
  text-align: center;
  justify-content: center;
  margin-top: auto;
  margin-right: 0;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}

.cards-header {
  background: #10122b;
  border-radius: 6px 6px 0 0;
  padding: 20px 45px;
  font-size: 14px;
  font-weight: 500;
}
.cards-header-date {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cards-header-date svg {
  color: #4154d1;
  background: #14183c;
  border-radius: 50%;
  padding: 5px;
  width: 30px;
}
.cards-wrapper {
  margin-left: 20px;
  max-width: 305px;
  width: 100%;
}
.cards-hour {
  font-size: 26px;
}
.cards-hour .am-pm {
  font-size: 15px;
  font-weight: 500;
}
.cards.card {
  border-radius: 0 0 6px 6px;
  padding: 30px 20px;
}
.cards.card svg {
  width: 24px;
  margin-left: auto;
  color: #818394;
}
.cards-head {
  display: flex;
  align-items: center;
}

.degree {
  margin-top: 10px;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #818394;
  font-weight: 500;
}
.degree svg {
  width: 24px;
  margin-right: 12px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  font-size: 13px;
  font-weight: 500;
}
.items.numbers {
  margin-top: 0;
}

.item {
  flex: 0 1 calc(100% / 7);
  padding: 10px 5px;
  text-align: center;
}
.item.is-active {
  background: #4255d4;
  border-radius: 50%;
  color: #fff;
}
.item.disable {
  color: #595b5b;
}

.account {
  width: 100%;
  height: 180px;
  margin-top: auto;
  flex-grow: 0;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  transition: 0.3s;
}
.account:hover {
  transform: scale(1.02);
}
.account:before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  box-shadow: -15px 0 0 0 #ef8741;
  background: #ef415c;
  top: 20px;
  left: 42px;
  border-radius: 50%;
}
.account-wrapper {
  max-width: 310px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
}
.account-profile {
  margin: auto;
  position: relative;
  text-align: center;
  position: relative;
}
.account-profile img {
  width: 250px;
  height: 150px;
  border-radius: 50%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: left;
     object-position: left;
  border: 3px solid #4255d3;
  padding: 5px;
}
.account-profile .blob {
  position: absolute;
  border-radius: 50%;
  -webkit-animation: fly 5.8s linear infinite alternate;
          animation: fly 5.8s linear infinite alternate;
}
.account-profile .blob:nth-child(1) {
  width: 14px;
  height: 14px;
  top: 25px;
  left: -20px;
  background: #28327a;
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
.account-profile .blob:nth-child(2) {
  width: 18px;
  height: 18px;
  background: #87344c;
  right: -20px;
  top: -20px;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
.account-profile .blob:nth-child(3) {
  width: 12px;
  height: 12px;
  background: #13645b;
  right: -35px;
  top: 50%;
  -webkit-animation-delay: 1.8s;
          animation-delay: 1.8s;
}
.account-name {
  margin: 20px 0 10px;
}
.account-title {
  font-size: 14px;
}
.account-cash {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 6px;
  padding-top: 16px;
  position: relative;
}
.account-cash:before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: #9b9ca7;
  right: 10px;
  border-radius: 50%;
  box-shadow: -10px 0 0 0 #9b9ca7, 10px 0 0 0 #9b9ca7;
  top: 24px;
}
.account-income {
  font-size: 14px;
}
.account-iban {
  margin-top: auto;
  font-weight: 500;
}

.time {
  height: 24px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #9e5924;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.time.is-wait {
  background: #4255d3;
}

.table .status {
  color: #1aa385;
  display: inline-flex;
  align-items: center;
}
.table .status svg {
  margin-right: 6px;
  width: 22px;
  height: 22px;
  padding: 3px;
  border-radius: 4px;
  background-color: #142940;
  color: currentColor;
}
.table .status.is-red {
  color: #d14b69;
}
.table .status.is-red svg {
  background: #2e2142;
  color: currentcolor;
}
.table .status.is-wait {
  color: #3E4EC2;
  position: relative;
}
.table .status.is-wait:before {
  width: 22px;
  height: 22px;
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  background: #1a214d;
  border-radius: 4px;
}
.table .status.is-wait svg {
  background-color: transparent;
  color: currentcolor;
  -webkit-animation: turn 2s linear infinite both;
          animation: turn 2s linear infinite both;
}

@-webkit-keyframes turn {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes turn {
  100% {
    transform: rotate(1turn);
  }
}
.table {
  text-align: left;
  padding: 0;
}
.table th {
  font-size: 14px;
  font-weight: normal;
  padding-bottom: 16px;
}
.table th:nth-child(n+5) {
  padding: 0 10px 16px;
}
.table th:first-child {
  padding-left: 36px;
}
.table td {
  font-size: 15px;
  vertical-align: middle;
  padding: 8px 0;
}
.table td:last-of-type {
  width: 100px;
}
.table td:nth-child(n+5) {
  padding: 0 10px;
}
.table td:nth-last-of-type(2) svg {
  width: 16px;
}
.table input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #9b9ca7;
  vertical-align: middle;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 16px;
  transition: 0.25s;
  background-size: 0;
  background-position: center;
}
.table input:checked {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' stroke='%23fff' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  background-color: #252954;
  background-size: 12px;
  background-repeat: no-repeat;
}

@-webkit-keyframes fly {
  40% {
    transform: translate(-6px, -6px);
  }
  60% {
    transform: translate(-12px, -2px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes fly {
  40% {
    transform: translate(-6px, -6px);
  }
  60% {
    transform: translate(-12px, -2px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.transection {
  flex-shrink: 0;
  max-width: 310px;
  width: 100%;
  margin-left: 20px;
}
.transection-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
}
.transection .is-wait {
  color: #3E4EC2;
}

.credit-wrapper {
  margin-top: auto;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
}
.credit-wrapper svg {
  width: 38px;
  padding: 3px;
  border-radius: 6px;
  margin-right: 12px;
}
.credit-wrapper path {
  width: 24px;
}
.credit-money {
  margin-left: auto;
}
.credit-money.is-active {
  color: #1aa385;
}
.credit-money.is-cancel {
  color: #d14b69;
}
.credit-money .is-wait {
  color: #3E4EC2;
}
.credit-status {
  font-size: 13px;
  font-weight: normal;
}
.credit-type {
  color: #e7e8ea;
  margin-bottom: 6px;
}

@media screen and (max-width: 1500px) {
  .wrapper {
    max-width: 1200px;
  }

  .activity {
    width: 49%;
    max-width: none;
  }

  .discount {
    width: 48%;
    max-width: none;
    height: 100%;
  }

  .first-box {
    flex-wrap: wrap;
  }
  .first-box .cards-wrapper {
    width: 67%;
    max-width: none;
    margin: 20px 0;
  }
  .first-box .cards-wrapper .item.is-active {
    background: none;
    color: inherit;
  }
  .first-box .account-wrapper {
    max-width: none;
    width: calc(33% - 20px);
    margin: 20px 0 20px 20px;
  }

  .second-box {
    flex-wrap: wrap;
  }
  .second-box .cards-wrapper {
    margin-top: 40px;
    width: 66%;
  }

  .transection {
    margin-top: 40px;
    max-width: none;
    width: 30%;
  }
}
@media screen and (max-width: 1200px) {
  .time {
    display: none;
  }
}
@media screen and (max-width: 1060px) {
  .user-info .button,
.user-info .hour {
    display: none;
  }
}
@media screen and (max-width: 1020px) {
  .user-box .cards-view {
    display: none;
  }

  .user-box .cards-header .cards-button {
    display: none;
  }

  .cards-header-date {
    margin: auto;
  }
}
@media screen and (max-width: 930px) {
  .second-box .cards-wrapper {
    width: 100%;
  }

  .transection {
    width: 100%;
    margin-left: 0;
    height: 100%;
    margin-top: 20px;
  }

  .header-link {
    display: none;
  }

  .user-info .profile {
    margin-right: 0;
  }
}
@media screen and (max-width: 850px) {
  .activity-card,
.discount {
    width: 100%;
  }

  .user-box .discount {
    margin-left: 0;
    margin-top: 20px;
  }

  .left-side {
    display: none;
  }

  .main-container {
    padding-left: 25px;
  }

  .activity-links,
.destination {
    margin-top: 20px;
  }
}
@media screen and (max-width: 720px) {
  .first-box .account-wrapper {
    display: none;
  }

  .first-box .cards-wrapper {
    width: 100%;
  }

  .second-box .cards.card {
    overflow-y: auto;
  }
}
@media screen and (max-width: 420px) {
  .destination-card + .destination-card {
    display: none;
  }
}
.user-box > * {
  -webkit-animation: top 1s var(--delay) both;
          animation: top 1s var(--delay) both;
}
  
  `;

  return (
    
      
      
<div className="wrapper">
 <div className="left-side">
  <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="active">
   <path d="M197.3 170.7h-160A37.4 37.4 0 010 133.3v-96A37.4 37.4 0 0137.3 0h160a37.4 37.4 0 0137.4 37.3v96a37.4 37.4 0 01-37.4 37.4zM37.3 32c-3 0-5.3 2.4-5.3 5.3v96c0 3 2.4 5.4 5.3 5.4h160c3 0 5.4-2.4 5.4-5.4v-96c0-3-2.4-5.3-5.4-5.3zm0 0M197.3 512h-160A37.4 37.4 0 010 474.7v-224a37.4 37.4 0 0137.3-37.4h160a37.4 37.4 0 0137.4 37.4v224a37.4 37.4 0 01-37.4 37.3zm-160-266.7c-3 0-5.3 2.4-5.3 5.4v224c0 3 2.4 5.3 5.3 5.3h160c3 0 5.4-2.4 5.4-5.3v-224c0-3-2.4-5.4-5.4-5.4zm0 0M474.7 512h-160a37.4 37.4 0 01-37.4-37.3v-96a37.4 37.4 0 0137.4-37.4h160a37.4 37.4 0 0137.3 37.4v96a37.4 37.4 0 01-37.3 37.3zm-160-138.7c-3 0-5.4 2.4-5.4 5.4v96c0 3 2.4 5.3 5.4 5.3h160c3 0 5.3-2.4 5.3-5.3v-96c0-3-2.4-5.4-5.3-5.4zm0 0M474.7 298.7h-160a37.4 37.4 0 01-37.4-37.4v-224A37.4 37.4 0 01314.7 0h160A37.4 37.4 0 01512 37.3v224a37.4 37.4 0 01-37.3 37.4zM314.7 32c-3 0-5.4 2.4-5.4 5.3v224c0 3 2.4 5.4 5.4 5.4h160c3 0 5.3-2.4 5.3-5.4v-224c0-3-2.4-5.3-5.3-5.3zm0 0" /></svg>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
  <svg viewBox="0 1 511 512" fill="currentColor">
   <path d="M498.7 222.7L289.8 13.8a46.8 46.8 0 00-66.7 0L14.4 222.6l-.2.2A47.2 47.2 0 0047 303h8.3v153.7a55.2 55.2 0 0055.2 55.2h81.7a15 15 0 0015-15V376.5a25.2 25.2 0 0125.2-25.2h48.2a25.2 25.2 0 0125.1 25.2V497a15 15 0 0015 15h81.8a55.2 55.2 0 0055.1-55.2V303.1h7.7a47.2 47.2 0 0033.4-80.4zm-21.2 45.4a17 17 0 01-12.2 5h-22.7a15 15 0 00-15 15v168.7a25.2 25.2 0 01-25.1 25.2h-66.8V376.5a55.2 55.2 0 00-55.1-55.2h-48.2a55.2 55.2 0 00-55.2 55.2V482h-66.7a25.2 25.2 0 01-25.2-25.2V288.1a15 15 0 00-15-15h-23A17.2 17.2 0 0135.5 244L244.4 35a17 17 0 0124.2 0l208.8 208.8v.1a17.2 17.2 0 010 24.2zm0 0" /></svg>
  <svg viewBox="0 0 512 512" fill="currentColor">
   <path d="M467 76H45a45 45 0 00-45 45v270a45 45 0 0045 45h422a45 45 0 0045-45V121a45 45 0 00-45-45zm-6.3 30L287.8 278a44.7 44.7 0 01-63.6 0L51.3 106h409.4zM30 384.9V127l129.6 129L30 384.9zM51.3 406L181 277.2l22 22c14.2 14.1 33 22 53.1 22 20 0 38.9-7.9 53-22l22-22L460.8 406H51.3zM482 384.9L352.4 256 482 127V385z" /></svg>
  <svg viewBox="0 0 512 512" fill="currentColor">
   <path d="M272 512h-32c-26 0-47.2-21.1-47.2-47.1V454c-11-3.5-21.8-8-32.1-13.3l-7.7 7.7a47.1 47.1 0 01-66.7 0l-22.7-22.7a47.1 47.1 0 010-66.7l7.7-7.7c-5.3-10.3-9.8-21-13.3-32.1H47.1c-26 0-47.1-21.1-47.1-47.1v-32.2c0-26 21.1-47.1 47.1-47.1H58c3.5-11 8-21.8 13.3-32.1l-7.7-7.7a47.1 47.1 0 010-66.7l22.7-22.7a47.1 47.1 0 0166.7 0l7.7 7.7c10.3-5.3 21-9.8 32.1-13.3V47.1c0-26 21.1-47.1 47.1-47.1h32.2c26 0 47.1 21.1 47.1 47.1V58c11 3.5 21.8 8 32.1 13.3l7.7-7.7a47.1 47.1 0 0166.7 0l22.7 22.7a47.1 47.1 0 010 66.7l-7.7 7.7c5.3 10.3 9.8 21 13.3 32.1h10.9c26 0 47.1 21.1 47.1 47.1v32.2c0 26-21.1 47.1-47.1 47.1H454c-3.5 11-8 21.8-13.3 32.1l7.7 7.7a47.1 47.1 0 010 66.7l-22.7 22.7a47.1 47.1 0 01-66.7 0l-7.7-7.7c-10.3 5.3-21 9.8-32.1 13.3v10.9c0 26-21.1 47.1-47.1 47.1zM165.8 409.2a176.8 176.8 0 0045.8 19 15 15 0 0111.3 14.5V465c0 9.4 7.7 17.1 17.1 17.1h32.2c9.4 0 17.1-7.7 17.1-17.1v-22.2a15 15 0 0111.3-14.5c16-4.2 31.5-10.6 45.8-19a15 15 0 0118.2 2.3l15.7 15.7a17.1 17.1 0 0024.2 0l22.8-22.8a17.1 17.1 0 000-24.2l-15.7-15.7a15 15 0 01-2.3-18.2 176.8 176.8 0 0019-45.8 15 15 0 0114.5-11.3H465c9.4 0 17.1-7.7 17.1-17.1v-32.2c0-9.4-7.7-17.1-17.1-17.1h-22.2a15 15 0 01-14.5-11.2c-4.2-16.1-10.6-31.6-19-45.9a15 15 0 012.3-18.2l15.7-15.7a17.1 17.1 0 000-24.2l-22.8-22.8a17.1 17.1 0 00-24.2 0l-15.7 15.7a15 15 0 01-18.2 2.3 176.8 176.8 0 00-45.8-19 15 15 0 01-11.3-14.5V47c0-9.4-7.7-17.1-17.1-17.1h-32.2c-9.4 0-17.1 7.7-17.1 17.1v22.2a15 15 0 01-11.3 14.5c-16 4.2-31.5 10.6-45.8 19a15 15 0 01-18.2-2.3l-15.7-15.7a17.1 17.1 0 00-24.2 0l-22.8 22.8a17.1 17.1 0 000 24.2l15.7 15.7a15 15 0 012.3 18.2 176.8 176.8 0 00-19 45.8 15 15 0 01-14.5 11.3H47c-9.4 0-17.1 7.7-17.1 17.1v32.2c0 9.4 7.7 17.1 17.1 17.1h22.2a15 15 0 0114.5 11.3c4.2 16 10.6 31.5 19 45.8a15 15 0 01-2.3 18.2l-15.7 15.7a17.1 17.1 0 000 24.2l22.8 22.8a17.1 17.1 0 0024.2 0l15.7-15.7a15 15 0 0118.2-2.3z" />
   <path d="M256 367.4c-61.4 0-111.4-50-111.4-111.4s50-111.4 111.4-111.4 111.4 50 111.4 111.4-50 111.4-111.4 111.4zm0-192.8a81.5 81.5 0 000 162.8 81.5 81.5 0 000-162.8z" /></svg>
  <svg viewBox="0 0 512 512" fill="currentColor">
   <path d="M255.2 468.6H63.8a21.3 21.3 0 01-21.3-21.2V64.6c0-11.7 9.6-21.2 21.3-21.2h191.4a21.2 21.2 0 100-42.5H63.8A63.9 63.9 0 000 64.6v382.8A63.9 63.9 0 0063.8 511H255a21.2 21.2 0 100-42.5z" />
   <path d="M505.7 240.9L376.4 113.3a21.3 21.3 0 10-29.9 30.3l92.4 91.1H191.4a21.2 21.2 0 100 42.6h247.5l-92.4 91.1a21.3 21.3 0 1029.9 30.3l129.3-127.6a21.3 21.3 0 000-30.2z" /></svg>
 </div>
 <div className="main-container">
  <div className="header">
   <div className="logo">Rent
    {/* <span className=logo-det>Cr</span> */}
    <span className='logo-det'>Cr</span>
    </div>
   <Link className="header-link active" to="#"><svg viewBox="-6 0 512 512" fill="currentColor">
     <path d="M227.7 357.5a15.1 15.1 0 0021.3 0l54-54a15.1 15.1 0 10-21.4-21.3l-43.3 43.2-19.7-19.7a15.1 15.1 0 00-21.4 21.4zm0 0" />
     <path d="M250.1 439.8a120.1 120.1 0 10-120-120c0 66.2 53.8 120 120 120zm0-209.7a89.9 89.9 0 010 179.5 89.9 89.9 0 010-179.5zm0 0" />
     <path d="M451.3 32.2h-27.5v-17a15.1 15.1 0 00-30.3 0v17h-29.7v-17a15.1 15.1 0 00-30.2 0v17h-167v-17a15.1 15.1 0 00-30.2 0v17h-29.7v-17a15.1 15.1 0 00-30.2 0v17H48.9A49 49 0 000 81v382A49 49 0 0048.9 512h402.4a49 49 0 0049-48.9v-382a49 49 0 00-49-49zm18.7 431c0 10.2-8.4 18.6-18.7 18.6H49A18.7 18.7 0 0130.2 463V158H470zM30.2 81c0-10.3 8.4-18.7 18.7-18.7h27.6v17.1a15.1 15.1 0 0030.2 0v-17h29.7v17a15.1 15.1 0 0030.3 0v-17h166.9v17a15.1 15.1 0 0030.2 0v-17h29.7v17a15.1 15.1 0 0030.3 0v-17h27.5c10.3 0 18.7 8.3 18.7 18.6v46.6H30.2zm0 0" />
    </svg>
    Bookings
   </Link>
   <Link className="header-link" to="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
     <path d="M10 13a2 2 0 110-4 2 2 0 010 4zm0-2.5a.5.5 0 100 1 .5.5 0 000-1z" />
     <path d="M20.3 11.8h-8.8a.8.8 0 010-1.6h8.8a.8.8 0 010 1.6zM8.5 11.8H3.7a.8.8 0 010-1.6h4.8a.8.8 0 010 1.6zM15 19a2 2 0 110-4 2 2 0 010 4zm0-2.5a.5.5 0 100 1 .5.5 0 000-1z" />
     <path d="M20.3 17.8h-3.8a.8.8 0 010-1.6h3.8a.8.8 0 010 1.6zM13.5 17.8H3.7a.8.8 0 010-1.6h9.8a.8.8 0 010 1.6z" />
     <path d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.4c0 .7.6 1.3 1.3 1.3h18.4c.7 0 1.3-.6 1.3-1.3V3.9c0-.7-.6-1.3-1.3-1.3z" />
     <path d="M23.3 6H.6a.8.8 0 010-1.5h22.6a.8.8 0 010 1.5z" />
    </svg>
    Controller
   </Link>
   <Link className="header-link" to="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
     <path d="M500 113.3C326.1 78.7 337.4 80.5 333.4 81.2L281 91.7A111.2 111.2 0 00176 17c-48.6 0-90 31.3-105 74.8L18 81.3A15 15 0 000 96v352a15 15 0 0012 14.7l162.2 32.2c3.6.4-7.6 2.3 161.8-31.6l158 31.4a15 15 0 0018-14.7V128a15 15 0 00-12-14.7zM176 47a81 81 0 0181 81c0 37.7-60.3 133.3-81 165-20.7-31.6-81-127.3-81-165a81 81 0 0181-81zM30 114.2l35.2 7a112 112 0 00-.2 6.8c0 25 16.4 65.4 50 123.4 19.7 33.9 39 63 46 73.2v137.1l-131-26zm161 210.4c7-10.2 26.3-39.3 46-73.2 33.6-58 50-98.4 50-123.4 0-2.3 0-4.6-.2-6.9l34.2-6.8v321.4l-130 26zm291 137.1l-131-26V114.3l131 26z" />
     <path d="M176 175a47 47 0 10-.1-94.1 47 47 0 00.1 94zm0-64a17 17 0 110 34 17 17 0 010-34z" /></svg>
    Map
   </Link>
   <Link className="header-link" to="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
     <path d="M76 240c12.1 0 23.1-4.8 31.2-12.6l44.2 22A44.9 44.9 0 00196 300a45 45 0 0040.6-64.4l60-60a45 45 0 0062.3-54l52.2-39.2a45 45 0 10-18-24l-52.2 39.2a45 45 0 00-65.5 56.8l-60 60a44.7 44.7 0 00-50.6 8.2l-44.2-22A44.9 44.9 0 0076 150a45 45 0 000 90zM436 30a15 15 0 110 30 15 15 0 010-30zm-120 90a15 15 0 110 30 15 15 0 010-30zM196 240a15 15 0 110 30 15 15 0 010-30zM76 180a15 15 0 110 30 15 15 0 010-30zm0 0" />
     <path d="M497 482h-16V165a15 15 0 00-15-15h-60a15 15 0 00-15 15v317h-30V255a15 15 0 00-15-15h-60a15 15 0 00-15 15v227h-30V375a15 15 0 00-15-15h-60a15 15 0 00-15 15v107h-30V315a15 15 0 00-15-15H46a15 15 0 00-15 15v167H15a15 15 0 100 30h482a15 15 0 100-30zm-76-302h30v302h-30zm-120 90h30v212h-30zM181 390h30v92h-30zM61 330h30v152H61zm0 0" />
    </svg>
    Reports
   </Link>
   <div className="user-info">
    <button className="button">All
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down">
      <path d="M6 9l6 6 6-6" /></svg>
    </button>
    <div className="user-name">Mike J</div>
    <svg className="profile" viewBox="-42 0 512 512" fill="currentColor">
     <path d="M210.4 246.6c33.8 0 63.2-12.1 87.1-36.1 24-24 36.2-53.3 36.2-87.2 0-33.9-12.2-63.2-36.2-87.2-24-24-53.3-36.1-87.1-36.1-34 0-63.3 12.2-87.2 36.1S87 89.4 87 123.3c0 33.9 12.2 63.2 36.2 87.2 24 24 53.3 36.1 87.2 36.1zm-66-189.3a89.1 89.1 0 0166-27.3c26 0 47.5 9 66 27.3a89.2 89.2 0 0127.3 66c0 26-9 47.6-27.4 66a89.1 89.1 0 01-66 27.3c-26 0-47.5-9-66-27.3a89.1 89.1 0 01-27.3-66c0-26 9-47.6 27.4-66zm0 0M426.1 393.7a304.6 304.6 0 00-12-64.9 160.7 160.7 0 00-13.5-30.3c-5.7-10.2-12.5-19-20.1-26.3a88.9 88.9 0 00-29-18.2 100.1 100.1 0 00-37-6.7c-5.2 0-10.2 2.2-20 8.5-6 4-13 8.5-20.9 13.5-6.7 4.3-15.8 8.3-27 11.9a107.3 107.3 0 01-66 0 119.3 119.3 0 01-27-12l-21-13.4c-9.7-6.3-14.8-8.5-20-8.5a100 100 0 00-37 6.7 88.8 88.8 0 00-29 18.2 114.4 114.4 0 00-20.1 26.3 161 161 0 00-13.4 30.3A302.5 302.5 0 001 393.7c-.7 9.8-1 20-1 30.2 0 26.8 8.5 48.4 25.3 64.4C41.8 504 63.6 512 90.3 512h246.5c26.7 0 48.6-8 65.1-23.7 16.8-16 25.3-37.6 25.3-64.4a437 437 0 00-1-30.2zm-44.9 72.8c-11 10.4-25.4 15.5-44.4 15.5H90.3c-19 0-33.4-5-44.4-15.5C35.2 456.3 30 442.4 30 424c0-9.5.3-19 1-28.1A272.9 272.9 0 0141.7 338a131 131 0 0110.9-24.7A84.8 84.8 0 0167.4 294a59 59 0 0119.3-12 69 69 0 0123.6-4.5c1 .5 3 1.6 6 3.6l21 13.6c9 5.6 20.4 10.7 34 15.1a137.3 137.3 0 0084.5 0c13.7-4.4 25.1-9.5 34-15.1a2721 2721 0 0027-17.2 69 69 0 0123.7 4.5 59 59 0 0119.2 12 84.5 84.5 0 0114.9 19.4c4.5 8 8.2 16.3 10.8 24.7a275.2 275.2 0 0110.8 57.8c.6 9 1 18.5 1 28.1 0 18.5-5.3 32.4-16 42.6zm0 0" /></svg>
    <div className="hour"  style={{color:'white'}}>08.20 pm</div>
   </div>
  </div>
  <div className="user-box first-box">
   <div className="activity card" style={{'--delay':'2s'}}>
    <div className="title" style={{color:'white'}}>User Activities</div>
    <div className="subtitle" style={{color:'white'}}>Hoo - is an adaptive Online Courses Application with a wide range of course directions. The students will have a great possibility to study.</div>
    <div className="activity-links">
     <div className="activity-link active" >Current User</div>
     <div className="activity-link notify" style={{color:'white'}}>User Request</div>
    </div>
    <div className="destination">
     <div className="destination-card">
      <div className="destination-profile">
       <img className="profile-img" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
       <div className="destination-length"  style={{color:'white'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin">
         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
         <circle cx="12" cy="10" r="3" />
        </svg>
        45.4m
       </div>
      </div>
      <div className="destination-points">
       <div className="point" style={{color:'white'}}>Traffic Point</div>
       <div className="sub-point" style={{color:'white'}} >Brooklyn St, NY</div>
      </div>
     </div>
     <div className="destination-card">
      <div className="destination-profile">
       <img className="profile-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
       <div className="destination-length"  style={{color:'white'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin">
         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
         <circle cx="12" cy="10" r="3" />
        </svg>
        42.8m
       </div>
      </div>
      <div className="destination-points">
       <div className="point"  style={{color:'white'}}>Pickup Point</div>
       <div className="sub-point" style={{color:'white'}}>Maryland 17, NY</div>
      </div>
     </div>
    </div>
   </div>
   {/* <div className="discount card" style={{'--delay': '.4s'}}>
    <div className="title"  style={{color:'white'}}>Discount Offers</div>
    <div className="discount-wrapper">
     <div className="discount-info">
      <div className="subtitle"  style={{color:'white'}}>The Best Offer is:</div>
      <div className="subtitle-count"  style={{color:'white'}}>$5</div>
      <div className="subtitle"  style={{color:'white'}}>Distance:</div>
      <div className="subtitle-count dist"  style={{color:'white'}}>4.5 Km</div>
     </div>
     <div className="discount-chart">
      <div className="circle">
       <div className="pie">
        <svg>
         <circle cx="60" cy="60" r="50"></circle>
        </svg>
       </div>
       <div className="counter" style={{color:'white'}}>0</div>
      </div>
     </div>
    </div>
    <div className="discount-profile">
     <span className="by" style={{color:'white'}}>By:</span>
     <img className="discount-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt=""/>
     <div className="discount-detail">
      <div className="discount-name" style={{color:'white'}}>Johnny Cauld</div>
      <div className="discount-type" style={{color:'white'}}>Micro bus & Travel Bus</div>
     </div>
    </div>
    <div className="button offer-button" style={{color:'white'}}>Get Offer</div>
   </div> */}
   <div className="cards-wrapper" style={{'--delay': '.6s'}}>
    <div className="cards-header">
     <div className="cards-header-date">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left">
       <path d="M15 18l-6-6 6-6" /></svg>
      <div className="title" style={{color:'white'}}>January 2020</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right">
       <path d="M9 18l6-6-6-6" /></svg>
     </div>
    </div>
    <div className="cards card">
     <div className="cards-head">
      <div className="cards-info">
       <div className="calendar-hour" style={{color:'white'}}>08.20 <span className="am-pm" style={{color:'white'}}>pm</span></div>
       <div className="degree">
        <svg viewBox="0 0 512 512">
         <circle cx="330.2" cy="240.1" fill="#feb137" r="78.9" />
         <g fill="#ffd15b">
          <path d="M320.5 130c-7.4.6-14-5-14.6-12.3l-4.1-47a13.5 13.5 0 0126.9-2.4l4 47c.7 7.4-4.8 14-12.2 14.6z" />
          <path d="M320.5 130c-7.4.6-14-5-14.6-12.3l-4.1-47a13.5 13.5 0 0126.9-2.4l4 47c.7 7.4-4.8 14-12.2 14.6zM438 228.5c-.6-7.4 4.9-14 12.3-14.6l47-4a13.5 13.5 0 012.4 26.8l-47 4.1c-7.5.7-14-4.8-14.7-12.3zM413 307.7a13.5 13.5 0 0119-1.6l36.2 30.3a13.5 13.5 0 01-17.3 20.7l-36.2-30.4a13.5 13.5 0 01-1.6-19z" />
          <path d="M413 307.7a13.5 13.5 0 0119-1.6l36.2 30.3a13.5 13.5 0 01-17.3 20.7l-36.2-30.4a13.5 13.5 0 01-1.6-19zM190 120.6a13.5 13.5 0 0119-1.7l36.2 30.4a13.5 13.5 0 01-17.3 20.6l-36.2-30.3a13.5 13.5 0 01-1.7-19zM447.4 98a13.5 13.5 0 011.7 19l-30.4 36.2A13.5 13.5 0 01398 136l30.4-36.2a13.5 13.5 0 0119-1.6z" />
         </g>
         <path d="M360 335.4a70.8 70.8 0 00-87.4-74A95 95 0 0085 286a85 85 0 00-3.4 170h273a60.4 60.4 0 005.2-120.6z" fill="#d8ecfe" />
         <path d="M360 335.4a70.8 70.8 0 00-87.4-74 95 95 0 00-125.7-68.3 95 95 0 0190.6 74.2 70.8 70.8 0 0187.4 74A60.4 60.4 0 01345.6 456h9.2a60.4 60.4 0 005.1-120.6z" fill="#c4e2ff" />
        </svg>
        81.2° F in Sylhet
       </div>
      </div>
      <svg viewBox="0 0 512 512" fill="currentColor">
       <path d="M272 512h-32c-26 0-47.2-21.1-47.2-47.1V454c-11-3.5-21.8-8-32.1-13.3l-7.7 7.7a47.1 47.1 0 01-66.7 0l-22.7-22.7a47.1 47.1 0 010-66.7l7.7-7.7c-5.3-10.3-9.8-21-13.3-32.1H47.1c-26 0-47.1-21.1-47.1-47.1v-32.2c0-26 21.1-47.1 47.1-47.1H58c3.5-11 8-21.8 13.3-32.1l-7.7-7.7a47.1 47.1 0 010-66.7l22.7-22.7a47.1 47.1 0 0166.7 0l7.7 7.7c10.3-5.3 21-9.8 32.1-13.3V47.1c0-26 21.1-47.1 47.1-47.1h32.2c26 0 47.1 21.1 47.1 47.1V58c11 3.5 21.8 8 32.1 13.3l7.7-7.7a47.1 47.1 0 0166.7 0l22.7 22.7a47.1 47.1 0 010 66.7l-7.7 7.7c5.3 10.3 9.8 21 13.3 32.1h10.9c26 0 47.1 21.1 47.1 47.1v32.2c0 26-21.1 47.1-47.1 47.1H454c-3.5 11-8 21.8-13.3 32.1l7.7 7.7a47.1 47.1 0 010 66.7l-22.7 22.7a47.1 47.1 0 01-66.7 0l-7.7-7.7c-10.3 5.3-21 9.8-32.1 13.3v10.9c0 26-21.1 47.1-47.1 47.1zM165.8 409.2a176.8 176.8 0 0045.8 19 15 15 0 0111.3 14.5V465c0 9.4 7.7 17.1 17.1 17.1h32.2c9.4 0 17.1-7.7 17.1-17.1v-22.2a15 15 0 0111.3-14.5c16-4.2 31.5-10.6 45.8-19a15 15 0 0118.2 2.3l15.7 15.7a17.1 17.1 0 0024.2 0l22.8-22.8a17.1 17.1 0 000-24.2l-15.7-15.7a15 15 0 01-2.3-18.2 176.8 176.8 0 0019-45.8 15 15 0 0114.5-11.3H465c9.4 0 17.1-7.7 17.1-17.1v-32.2c0-9.4-7.7-17.1-17.1-17.1h-22.2a15 15 0 01-14.5-11.2c-4.2-16.1-10.6-31.6-19-45.9a15 15 0 012.3-18.2l15.7-15.7a17.1 17.1 0 000-24.2l-22.8-22.8a17.1 17.1 0 00-24.2 0l-15.7 15.7a15 15 0 01-18.2 2.3 176.8 176.8 0 00-45.8-19 15 15 0 01-11.3-14.5V47c0-9.4-7.7-17.1-17.1-17.1h-32.2c-9.4 0-17.1 7.7-17.1 17.1v22.2a15 15 0 01-11.3 14.5c-16 4.2-31.5 10.6-45.8 19a15 15 0 01-18.2-2.3l-15.7-15.7a17.1 17.1 0 00-24.2 0l-22.8 22.8a17.1 17.1 0 000 24.2l15.7 15.7a15 15 0 012.3 18.2 176.8 176.8 0 00-19 45.8 15 15 0 01-14.5 11.3H47c-9.4 0-17.1 7.7-17.1 17.1v32.2c0 9.4 7.7 17.1 17.1 17.1h22.2a15 15 0 0114.5 11.3c4.2 16 10.6 31.5 19 45.8a15 15 0 01-2.3 18.2l-15.7 15.7a17.1 17.1 0 000 24.2l22.8 22.8a17.1 17.1 0 0024.2 0l15.7-15.7a15 15 0 0118.2-2.3z"></path>
       <path d="M256 367.4c-61.4 0-111.4-50-111.4-111.4s50-111.4 111.4-111.4 111.4 50 111.4 111.4-50 111.4-111.4 111.4zm0-192.8a81.5 81.5 0 000 162.8 81.5 81.5 0 000-162.8z"></path>
      </svg>
     </div>
     <div className="items days">
      <div className="item" style={{color:'white'}}>Mon</div>
      <div className="item" style={{color:'white'}}>Tue</div>
      <div className="item" style={{color:'white'}}>Wed</div>
      <div className="item" style={{color:'white'}}>Thu</div>
      <div className="item" style={{color:'white'}}>Fri</div>
      <div className="item" style={{color:'white'}}>Sat</div>
      <div className="item" style={{color:'white'}}>Sun</div>
     </div>
     <div className="items numbers">
      <div className="item" style={{color:'white'}}>1</div>
      <div className="item" style={{color:'white'}}>2</div>
      <div className="item" style={{color:'white'}}>3</div>
      <div className="item" style={{color:'white'}}>4</div>
      <div className="item" style={{color:'white'}}>5</div>
      <div className="item" style={{color:'white'}}>6</div>
      <div className="item" style={{color:'white'}}>7</div>
      <div className="item" style={{color:'white'}}>8</div>
      <div className="item" style={{color:'white'}}>9</div>
      <div className="item" style={{color:'white'}}>10</div>
      <div className="item" style={{color:'white'}}>11</div>
      <div className="item" style={{color:'white'}}>12</div>
      <div className="item" style={{color:'white'}}>13</div>
      <div className="item" style={{color:'white'}}>14</div>
      <div className="item" style={{color:'white'}}>15</div>
      <div className="item" style={{color:'white'}}>16</div>
      <div className="item is-active" style={{color:'white'}}>17</div>
      <div className="item" style={{color:'white'}}>18</div>
      <div className="item" style={{color:'white'}}>19</div>
      <div className="item" style={{color:'white'}}>20</div>
      <div className="item" style={{color:'white'}}>21</div>
      <div className="item" style={{color:'white'}}>22</div>
      <div className="item" style={{color:'white'}}>23</div>
      <div className="item" style={{color:'white'}}>24</div>
      <div className="item" style={{color:'white'}}>25</div>
      <div className="item" style={{color:'white'}}>26</div>
      <div className="item" style={{color:'white'}}>27</div>
      <div className="item" style={{color:'white'}}>28</div>
      <div className="item" style={{color:'white'}}>29</div>
      <div className="item" style={{color:'white'}}>30</div>
      <div className="item" style={{color:'white'}}>31</div>
      <div className="item disable" style={{color:'white'}}>1</div>
      <div className="item disable" style={{color:'white'}}>2</div>
      <div className="item disable" style={{color:'white'}}>3</div>
     </div>
    </div>
   </div>
   <div className="account-wrapper" style={{'--delay':'.8s'}}>
    <div className="account-profile" width="100">
    <Link to="/" className="nav-link px-2 text-body-secondary" width="100">
            <img src={logo1} alt="Logo" width="50" height="40" className="d-inline-block align-text-top" />
          </Link>
     <div className="blob-wrap">
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
     </div>
     <div className="account-name" style={{color:'white'}}>NGO Name</div>
     <div className="account-title" style={{color:'white'}}>Dashboard</div>
    </div>
    <div className="account card">
     <div className="account-cash" style={{color:'white'}}>$ 5637.04</div>
     <div className="account-income" style={{color:'white'}}>Total Income</div>
     <div className="account-iban" style={{color:'white'}}>**** **** **** 3060</div>
    </div>
   </div>
  </div>
  <div className="user-box second-box">
   <div className="cards-wrapper" style={{'--delay':'1s'}}>
    <div className="cards-header">
     <div className="cards-view">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar">
       <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
       <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
      Calendar View
      <span className="today" style={{color:'white'}}>Today</span>
     </div>
     <div className="cards-header-date">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left">
       <path d="M15 18l-6-6 6-6" /></svg>
      <div className="title" style={{color:'white'}}>Sat, Nov 25 2020</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right">
       <path d="M9 18l6-6-6-6" /></svg>
     </div>
     <div className="cards-button button"  style={{color:'white'}}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
       <path d="M12 5v14M5 12h14" />
      </svg>
      Create
     </div>
    </div>
    <div className="cards card">
     <table className="table">
      <thead>
       <tr>
        <th>T</th>
        <th>Name</th>
        <th>From</th>
        <th>To</th>
        <th>V</th>
        <th>B</th>
        <th>C</th>
        <th>A</th>
        <th>W</th>
        <th>Status</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         <input type="checkbox" id="row1" className="table-row"/>
         <span className="time">17.00</span>
        </td>
        <td>John D</td>
        <td>Sudbury Station</td>
        <td>Center Plaza</td>
        <td>N</td>
        <td></td>
        <td>€</td>
        <td></td>
        <td><svg viewBox="-22 0 134 134.06032" fill="currentColor">
          <path d="M23.347656 134.058594C8.445312 84.953125 39.933594 67.023438 39.933594 67.023438c-2.203125 26.203124 12.6875 46.617187 12.6875 46.617187 5.476562-1.652344 15.929687-9.375 15.929687-9.375 0 9.375-5.515625 29.78125-5.515625 29.78125s19.308594-14.929687 25.386719-39.726563c6.070313-24.796874-11.5625-49.691406-11.5625-49.691406 1.0625 17.550782-4.875 34.8125-16.507813 48 .582032-.671875 1.070313-1.417968 1.445313-2.226562 2.089844-4.179688 5.445313-15.042969 3.480469-40.199219C62.511719 14.890625 30.515625 0 30.515625 0c2.757813 21.515625-5.511719 26.472656-24.882813 67.3125-19.371093 40.832031 17.714844 66.746094 17.714844 66.746094zm0 0" />
         </svg></td>
        <td>
         <div className="status is-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M20 6L9 17l-5-5" />
          </svg>
          Active
         </div>
        </td>
       </tr>
       <tr>
        <td>
         <input type="checkbox" id="row2" className="table-row"/>
         <span className="time">17.00</span>
        </td>
        <td>Rufi</td>
        <td>One Beacon</td>
        <td>Los Angeles</td>
        <td>N</td>
        <td></td>
        <td>€</td>
        <td></td>
        <td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-activity">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
         </svg></td>
        <td>
         <div className="status is-red">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M18 6L6 18M6 6l12 12" />
          </svg>
          Rejected
         </div>
        </td>
       </tr>
       <tr>
        <td>
         <input type="checkbox" id="row3" className="table-row"/>
         <span className="time is-wait">17.00</span>
        </td>
        <td>Alfred</td>
        <td>5 Main High</td>
        <td>Center Plaza</td>
        <td>N</td>
        <td></td>
        <td>€</td>
        <td></td>
        <td><svg viewBox="-22 0 134 134.06032" fill="currentColor">
          <path d="M23.347656 134.058594C8.445312 84.953125 39.933594 67.023438 39.933594 67.023438c-2.203125 26.203124 12.6875 46.617187 12.6875 46.617187 5.476562-1.652344 15.929687-9.375 15.929687-9.375 0 9.375-5.515625 29.78125-5.515625 29.78125s19.308594-14.929687 25.386719-39.726563c6.070313-24.796874-11.5625-49.691406-11.5625-49.691406 1.0625 17.550782-4.875 34.8125-16.507813 48 .582032-.671875 1.070313-1.417968 1.445313-2.226562 2.089844-4.179688 5.445313-15.042969 3.480469-40.199219C62.511719 14.890625 30.515625 0 30.515625 0c2.757813 21.515625-5.511719 26.472656-24.882813 67.3125-19.371093 40.832031 17.714844 66.746094 17.714844 66.746094zm0 0" />
         </svg></td>
        <td>
         <div className="status is-wait"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-loader">
           <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          Waiting
         </div>
        </td>
       </tr>
       <tr>
        <td>
         <input type="checkbox" id="row4" className="table-row"/>
         <span className="time is-wait">17.00</span>
        </td>
        <td>Mike J.</td>
        <td>Brooklyn 99</td>
        <td>Park, NY</td>
        <td>N</td>
        <td></td>
        <td>€</td>
        <td></td>
        <td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-activity">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
         </svg></td>
        <td>
         <div className="status is-wait"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-loader">
           <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          Waiting
         </div>
        </td>
       </tr>
       <tr>
        <td>
         <input type="checkbox" id="row5" className="table-row"/>
         <span className="time">17.00</span>
        </td>
        <td>Hermann B.</td>
        <td>Janburg Station</td>
        <td>Center Park</td>
        <td>N</td>
        <td></td>
        <td>€</td>
        <td></td>
        <td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-activity">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
         </svg></td>
        <td>
         <div className="status is-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M20 6L9 17l-5-5" />
          </svg>
          Active
         </div>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
   
   <div className="card transection" style={{'--delay': '1.2s'}}>
    <div className="transection-header">
     <div className="head" style={{color:'white'}}>Transactions</div>
     <div className="head is-wait">View All</div>
    </div>
    <div className="credit-wrapper">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.764 291.764"  style={{'backgroundColor': '#292c6d'}}>
  <g xmlns="http://www.w3.org/2000/svg">
    <path d="M119.259 100.23l-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z" fill="#fff" data-original="#2394bc"/>
    <path d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z" fill="#fffffe" data-original="#efc75e"/>
  </g>
</svg>
     <div className="credit-name">
      <div className="credit-type">Visa</div>
      <div className="credit-status" style={{color:'white'}}>Payment Received</div>
     </div>
     <div className="credit-money is-active">+$3.945</div>
    </div>
    <div className="credit-wrapper">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{'backgroundColor':'#1f2755'}}>
  <path xmlns="http://www.w3.org/2000/svg" d="M488.727 66.494H23.273C10.42 66.494 0 76.914 0 89.767v332.466c0 12.853 10.42 23.273 23.273 23.273h465.454c12.853 0 23.273-10.42 23.273-23.273V89.767c0-12.853-10.42-23.273-23.273-23.273z" fill="#1f2755" data-original="#5286f9"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M273.776 189.773c5.115 5.86 9.57 12.31 13.236 19.242 7.427 14.041 11.655 30.026 11.655 46.986s-4.228 32.943-11.655 46.986c-3.666 6.932-8.121 13.38-13.236 19.24-5.264 6.031-11.23 11.427-17.776 16.069 16.454 11.664 36.523 18.553 58.182 18.553 55.608 0 100.849-45.241 100.849-100.848S369.79 155.152 314.182 155.152c-21.659 0-41.728 6.886-58.182 18.553 6.544 4.642 12.51 10.039 17.776 16.068z" fill="#f0425c" data-original="#ffb655"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M287.012 209.016c-3.666-6.934-8.121-13.382-13.236-19.242-5.267-6.031-11.231-11.425-17.776-16.066-16.452-11.667-36.523-18.553-58.182-18.553-55.608 0-100.848 45.241-100.848 100.848s45.241 100.848 100.848 100.848c21.659 0 41.73-6.887 58.182-18.553 6.546-4.641 12.51-10.038 17.776-16.067 5.115-5.86 9.57-12.31 13.236-19.24 7.427-14.043 11.655-30.028 11.655-46.986 0-16.964-4.228-32.948-11.655-46.989z" fill="#ef8641" data-original="#d8143a"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M197.818 356.851c-55.608 0-100.848-45.241-100.848-100.848s45.241-100.848 100.848-100.848c21.659 0 41.728 6.886 58.182 18.553V66.494H23.273C10.42 66.494 0 76.914 0 89.767v332.466c0 12.853 10.42 23.273 23.273 23.273H256v-107.21c-16.454 11.666-36.523 18.555-58.182 18.555z" fill="#1f2755" data-original="#3d6deb"/>
</svg>
     <div className="credit-name">
      <div className="credit-type">MasterCard</div>
      <div className="credit-status" style={{color:'white'}}>Account Deposit</div>
     </div>
     <div className="credit-money is-active">+$3.00</div>
    </div>
    <div className="credit-wrapper">
     <svg viewBox="0 0 504 504" style={{'backgroundColor':'#046fcf'}}>
  <path xmlns="http://www.w3.org/2000/svg" fill="#fff" data-original="#2fabf7" d="M43.2 207.6h17.6L52 185.2z"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M261.6 188.4c-1.6-.8-4-.8-6.4-.8h-16v12.8h16c2.4 0 4.8 0 6.4-.8s2.4-3.2 2.4-5.6c.8-3.2-.8-4.8-2.4-5.6z" fill="#fff" data-original="#228fe0"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M432.8 164.4v9.6l-4.8-9.6h-37.6v9.6l-4.8-9.6h-51.2c-8.8 0-16 1.6-22.4 4.8v-4.8h-36v4.8c-4-3.2-8.8-4.8-15.2-4.8H132l-8.8 20-8.8-20H73.6v9.6l-4.8-9.6H34.4l-16 37.6L0 243.6h40.8l4.8-12.8h11.2l4.8 12.8H108V234l4 9.6h23.2l4-9.6v9.6h111.2v-20.8h1.6c1.6 0 1.6 0 1.6 2.4v17.6h57.6V238c4.8 2.4 12 4.8 21.6 4.8h24l4.8-12.8h11.2l4.8 12.8H424v-12l7.2 12h37.6v-78.4h-36zm-270.4 67.2h-13.6v-44l-19.2 44h-12l-19.2-44v44H71.2l-5.6-12H38.4l-4.8 12.8H18.4l24-56.8h20l22.4 53.6v-53.6h21.6L124 214l16-38.4h22.4v56zm54.4-44h-31.2V198H216v11.2h-30.4v11.2h31.2v12H172v-56.8h44.8v12zm60 23.2c1.6 3.2 2.4 5.6 2.4 10.4v11.2h-13.6v-7.2c0-3.2 0-8-2.4-11.2-2.4-2.4-4.8-2.4-9.6-2.4h-14.4v20.8h-13.6v-56.8H256c7.2 0 12 0 16 2.4s6.4 6.4 6.4 12.8c0 8.8-5.6 13.6-9.6 15.2 4 .8 6.4 3.2 8 4.8zm24 20.8h-13.6v-56.8h13.6v56.8zm157.6 0h-19.2l-25.6-42.4v42.4h-27.2l-4.8-12h-28l-4.8 12.8h-15.2c-6.4 0-14.4-1.6-19.2-6.4-4.8-4.8-7.2-11.2-7.2-21.6 0-8 1.6-16 7.2-22.4 4-4.8 11.2-6.4 20-6.4h12.8v12h-12.8c-4.8 0-7.2.8-10.4 3.2-2.4 2.4-4 7.2-4 12.8 0 6.4.8 10.4 4 13.6 2.4 2.4 5.6 3.2 9.6 3.2h5.6l18.4-44h20L400 230v-53.6h20l23.2 39.2v-39.2h13.6v55.2h1.6z" fill="#fbfbfb" data-original="#0571c1"/>
  <g xmlns="http://www.w3.org/2000/svg">
    <path fill="#fff" data-original="#228fe0" d="M358.4 207.6h18.4l-8.8-22.4zM222.4 322.8v-45.6l-20.8 22.4z"/>
  </g>
  <path xmlns="http://www.w3.org/2000/svg" fill="#fff" data-original="#2fabf7" d="M136.8 282.8v10.4h29.6v11.2h-29.6v12h32.8l15.2-16.8-14.4-16.8z"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M252.8 282.8H236v14.4h17.6c4.8 0 8-2.4 8-7.2-.8-4.8-4-7.2-8.8-7.2z" fill="#fff" data-original="#228fe0"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M500 296.4v-36h-33.6c-7.2 0-12.8 1.6-16.8 4.8v-4.8h-36.8c-5.6 0-12.8 1.6-16 4.8v-4.8H332v4.8c-4.8-4-13.6-4.8-17.6-4.8h-43.2v4.8c-4-4-13.6-4.8-18.4-4.8h-48l-11.2 12-10.4-12h-72v78.4h70.4l11.2-12 10.4 12h43.2v-18.4h5.6c5.6 0 12.8 0 18.4-2.4v21.6h36v-20.8h1.6c2.4 0 2.4 0 2.4 2.4v18.4h108.8c7.2 0 14.4-1.6 18.4-4.8v4.8H472c7.2 0 14.4-.8 19.2-4 8-4.8 12.8-13.6 12.8-24 0-5.6-1.6-11.2-4-15.2zm-248 12.8h-16v19.2h-25.6l-16-18.4-16.8 18.4h-52.8v-56.8h53.6l16 18.4 16.8-18.4h42.4c10.4 0 22.4 3.2 22.4 18.4-.8 16-12 19.2-24 19.2zm80-3.2c1.6 2.4 2.4 5.6 2.4 10.4v11.2h-13.6v-7.2c0-3.2 0-8.8-2.4-11.2-1.6-2.4-4.8-2.4-9.6-2.4h-14.4v20.8h-13.6v-56.8h30.4c6.4 0 12 0 16 2.4s7.2 6.4 7.2 12.8c0 8.8-5.6 13.6-9.6 15.2 4 1.6 6.4 3.2 7.2 4.8zm55.2-23.2H356v10.4h30.4v11.2H356v11.2h31.2v12h-44.8v-56.8h44.8v12zm33.6 44.8h-25.6v-12h25.6c2.4 0 4 0 5.6-1.6.8-.8 1.6-2.4 1.6-4s-.8-3.2-1.6-4c-.8-.8-2.4-1.6-4.8-1.6-12.8-.8-28 0-28-17.6 0-8 4.8-16.8 19.2-16.8h26.4v13.6h-24.8c-2.4 0-4 0-5.6.8s-1.6 2.4-1.6 4c0 2.4 1.6 3.2 3.2 4s3.2.8 4.8.8h7.2c7.2 0 12 1.6 15.2 4.8 2.4 2.4 4 6.4 4 12 0 12-7.2 17.6-20.8 17.6zm68.8-5.6c-3.2 3.2-8.8 5.6-16.8 5.6h-25.6v-12h25.6c2.4 0 4 0 5.6-1.6.8-.8 1.6-2.4 1.6-4s-.8-3.2-1.6-4c-.8-.8-2.4-1.6-4.8-1.6-12.8-.8-28 0-28-17.6 0-8 4.8-16.8 19.2-16.8h26.4v13.6h-24c-2.4 0-4 0-5.6.8s-1.6 2.4-1.6 4c0 2.4.8 3.2 3.2 4 1.6.8 3.2.8 4.8.8h7.2c7.2 0 12 1.6 15.2 4.8.8 0 .8.8.8.8 2.4 3.2 3.2 7.2 3.2 11.2 0 4.8-1.6 8.8-4.8 12z" fill="#fbfbfb" data-original="#0571c1"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M317.6 284.4c-1.6-.8-4-.8-6.4-.8h-16v12.8h16c2.4 0 4.8 0 6.4-.8s2.4-3.2 2.4-5.6c.8-3.2-.8-4.8-2.4-5.6z" fill="#fff" data-original="#228fe0"/>
  <g xmlns="http://www.w3.org/2000/svg">
    <path d="M261.6 188.4c-1.6-.8-4-.8-6.4-.8h-16v12.8h16c2.4 0 4.8 0 6.4-.8s2.4-3.2 2.4-5.6c.8-3.2-.8-4.8-2.4-5.6zM358.4 207.6h18.4l-8.8-22.4zM222.4 322.8v-45.6l-20.8 22.4z" fill="#fff" data-original="#228fe0"/>
  </g>
  <path d="M252.8 282.8H236v14.4h17.6c4.8 0 8-2.4 8-7.2-.8-4.8-4-7.2-8.8-7.2zM317.6 284.4c-1.6-.8-4-.8-6.4-.8h-16v12.8h16c2.4 0 4.8 0 6.4-.8s2.4-3.2 2.4-5.6c.8-3.2-.8-4.8-2.4-5.6z" fill="#fff" data-original="#228fe0" xmlns="http://www.w3.org/2000/svg"/>
  <g xmlns="http://www.w3.org/2000/svg">
    <path fill="#fff" data-original="#2fabf7" d="M247.2 326L236 314v13.6h-26.4l-16-18.4-17.6 18.4h-52.8v-56h53.6l16.8 18.4 8-9.6-20-20h-70.4v78.4h70.4l12-12 10.4 12h43.2zM164 242.8l-10.4-11.2h-4.8v-4.8l-12-12-8 16.8h-11.2l-19.2-44v44H71.2l-5.6-12H38.4l-5.6 12H18.4l24-56h20l22.4 53.6v-53.6h12l-11.2-11.2h-12v9.6l-4-9.6H34.4l-16 37.6L0 242.8H41.6l4.8-12h11.2l5.6 12H108v-9.6l4 9.6h23.2l4-9.6v9.6z"/>
    <path fill="#fff" data-original="#2fabf7" d="M127.2 206l-12.8-12.8L124 214z"/>
  </g>
  <g xmlns="http://www.w3.org/2000/svg">
    <path d="M491.2 334.8c7.2-4.8 12-12.8 12.8-21.6L492.8 302c.8 2.4 1.6 4.8 1.6 8 0 4.8-1.6 8.8-4.8 12-3.2 3.2-8.8 5.6-16.8 5.6h-25.6v-12h25.6c2.4 0 4 0 5.6-1.6.8-.8 1.6-2.4 1.6-4s-.8-3.2-1.6-4c-.8-.8-2.4-1.6-4.8-1.6-12.8-.8-28 0-28-17.6 0-8 4.8-15.2 16.8-16.8l-8.8-8.8c-1.6.8-2.4 1.6-3.2 1.6V258h-36.8c-5.6 0-12.8 1.6-16 4.8V258H332v4.8c-4.8-4-13.6-4.8-17.6-4.8h-43.2v4.8c-4-4-13.6-4.8-18.4-4.8h-48l-11.2 12-10.4-12h-8.8l24 24 12-12.8h42.4c10.4 0 22.4 3.2 22.4 18.4 0 16-11.2 19.2-23.2 19.2h-16v12l12 12v-12h4c5.6 0 12.8 0 18.4-2.4V338h36v-20.8h1.6c2.4 0 2.4 0 2.4 2.4V338h108.8c7.2 0 14.4-1.6 18.4-4.8v4.8H472c6.4.8 13.6 0 19.2-3.2zM332 306c1.6 2.4 2.4 5.6 2.4 10.4v11.2h-13.6v-7.2c0-3.2 0-8.8-2.4-11.2-1.6-2.4-4.8-2.4-9.6-2.4h-14.4v20.8h-13.6v-56.8h30.4c6.4 0 12 0 16 2.4s7.2 6.4 7.2 12.8c0 8.8-5.6 13.6-9.6 15.2 4 1.6 6.4 3.2 7.2 4.8zm55.2-23.2H356v10.4h30.4v11.2H356v11.2h31.2v12h-44.8v-56.8h44.8v12zm33.6 44.8h-25.6v-12h25.6c2.4 0 4 0 5.6-1.6.8-.8 1.6-2.4 1.6-4s-.8-3.2-1.6-4c-.8-.8-2.4-1.6-4.8-1.6-12.8-.8-28 0-28-17.6 0-8 4.8-16.8 19.2-16.8h26.4v13.6h-24.8c-2.4 0-4 0-5.6.8s-1.6 2.4-1.6 4c0 2.4 1.6 3.2 3.2 4s3.2.8 4.8.8h7.2c7.2 0 12 1.6 15.2 4.8 2.4 2.4 4 6.4 4 12 0 12-7.2 17.6-20.8 17.6z" fill="#fff" data-original="#228fe0"/>
    <path d="M459.2 288.4c0 2.4.8 3.2 3.2 4 1.6.8 3.2.8 4.8.8h7.2c4.8 0 8 .8 11.2 2.4l-12-12h-7.2c-2.4 0-4 0-5.6.8-.8.8-1.6 2.4-1.6 4zM431.2 240.4l1.6 2.4h.8zM387.2 196.4l13.6 32.8V210z" fill="#fff" data-original="#228fe0"/>
    <path d="M250.4 222.8h1.6c1.6 0 1.6 0 1.6 2.4v17.6h57.6V238c4.8 2.4 12 4.8 21.6 4.8h24l4.8-12.8h11.2l4.8 12.8H424v-8l-11.2-11.2v8.8h-27.2l-4-12.8h-28l-4.8 12.8h-15.2c-6.4 0-14.4-1.6-19.2-6.4-4.8-4.8-7.2-11.2-7.2-21.6 0-8 1.6-16 7.2-22.4 4-4.8 11.2-6.4 20-6.4h12.8v12h-12.8c-4.8 0-7.2.8-10.4 3.2-2.4 2.4-4 7.2-4 12.8 0 6.4.8 10.4 4 13.6 2.4 2.4 5.6 3.2 9.6 3.2h5.6l18.4-44h8l-11.2-11.2h-20.8c-8.8 0-16 1.6-22.4 4.8v-4.8H276v4.8c-4-3.2-8.8-4.8-15.2-4.8H132l-8.8 20-8.8-20H79.2l11.2 11.2h16L120 206l4.8 4.8 14.4-35.2h22.4v56.8H148v-44l-13.6 32 23.2 23.2h92l.8-20.8zm36.8-47.2h13.6v56.8h-13.6v-56.8zm-70.4 12h-31.2V198H216v11.2h-30.4v11.2h31.2v12H172v-56.8h44.8v12zm22.4 44h-13.6v-56.8H256c7.2 0 12 0 16 2.4s6.4 6.4 6.4 12.8c0 8.8-5.6 13.6-9.6 15.2 3.2.8 5.6 3.2 6.4 4.8 1.6 3.2 2.4 5.6 2.4 10.4v11.2H264v-7.2c0-3.2 0-8-2.4-11.2-.8-1.6-3.2-1.6-8-1.6h-14.4v20z" fill="#fff" data-original="#228fe0"/>
  </g>
</svg>
     <div className="credit-name">
      <div className="credit-type" style={{color:'white'}}>American Express</div>
      <div className="credit-status" style={{color:'white'}}>Payment Waiting</div>
     </div>
     <div className="credit-money is-wait">+$53.25</div>
    </div>
    <div className="credit-wrapper">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.351 469.351" style={{'backgroundColor':'#0365b3'}}>
  <path xmlns="http://www.w3.org/2000/svg" d="M356.626 85.086a37.887 37.887 0 00-38.763-8.277 10.668 10.668 0 00-7.168 8.533l-2.987 20.523c-4.529 30.998-31.052 54.019-62.379 54.144h-42.667a10.666 10.666 0 00-10.347 8.085l-32 128a10.667 10.667 0 0010.346 13.248h53.333a10.666 10.666 0 0010.347-8.085l19.307-77.248h41.6c31.934.106 59.792-21.66 67.413-52.672l7.872-31.552a56.099 56.099 0 00-13.907-54.699z" fill="#e6f0f9" data-original="#03a9f4"/>
  <g xmlns="http://www.w3.org/2000/svg">
    <path d="M10.664 437.342C4.773 437.341-.002 432.564 0 426.673c0-.869.107-1.735.317-2.578l10.667-42.453v-.448l10.667-42.432a10.666 10.666 0 0110.347-8.085h27.136c14.728-.003 26.669 11.933 26.673 26.661 0 2.181-.267 4.354-.795 6.47l-2.667 10.667c-2.967 11.875-13.637 20.205-25.877 20.203H29.672l-8.64 34.581a10.667 10.667 0 01-10.368 8.083zm24.341-64h21.461a5.335 5.335 0 005.163-4.053l2.667-10.667a5.311 5.311 0 00-5.163-6.634H40.338l-5.333 21.354zM124.733 437.342h-15.189c-16.33.004-29.571-13.231-29.575-29.561a29.56 29.56 0 01.882-7.175l1.408-5.675c3.157-12.736 14.612-21.662 27.733-21.611h15.189c16.33.028 29.545 13.289 29.517 29.619a29.561 29.561 0 01-.887 7.138l-1.408 5.675c-3.16 12.705-14.579 21.614-27.67 21.59zm-23.168-31.552a8.234 8.234 0 007.979 10.219h15.189a7.147 7.147 0 006.955-5.419l1.408-5.675a8.234 8.234 0 00-7.979-10.219h-15.189a7.147 7.147 0 00-6.955 5.419l-1.408 5.675z" fill="#fff" data-original="#283593"/>
    <path d="M138.664 437.342a10.667 10.667 0 01-10.347-13.248l10.667-42.667c1.426-5.72 7.218-9.202 12.939-7.776 5.72 1.426 9.202 7.218 7.776 12.939l-10.667 42.667a10.666 10.666 0 01-10.368 8.085z" fill="#fff" data-original="#283593"/>
  </g>
  <g xmlns="http://www.w3.org/2000/svg">
    <path d="M266.664 437.342a10.667 10.667 0 01-10.347-13.248l10.667-42.453v-.448l10.667-42.432a10.666 10.666 0 0110.347-8.085h27.136c14.728-.003 26.669 11.933 26.673 26.661 0 2.181-.267 4.354-.795 6.47l-2.667 10.667c-2.967 11.875-13.637 20.205-25.877 20.203h-26.795l-8.64 34.581a10.669 10.669 0 01-10.369 8.084zm24.341-64h21.483a5.335 5.335 0 005.163-4.053l2.667-10.667a5.312 5.312 0 00-5.163-6.634h-18.816l-5.334 21.354zM380.733 437.342h-15.189c-16.33.004-29.571-13.231-29.575-29.561a29.56 29.56 0 01.882-7.175l1.408-5.675c3.157-12.736 14.612-21.662 27.733-21.611h15.189c16.33-.004 29.571 13.231 29.575 29.561a29.56 29.56 0 01-.882 7.175l-1.408 5.675c-3.157 12.736-14.612 21.662-27.733 21.611zm-23.168-31.552a8.234 8.234 0 007.979 10.219h15.189a7.147 7.147 0 006.955-5.419l1.408-5.675a8.234 8.234 0 00-7.979-10.219h-15.189a7.147 7.147 0 00-6.955 5.419l-1.408 5.675z" fill="#e6f0f9" data-original="#03a9f4"/>
    <path d="M394.664 437.342a10.667 10.667 0 01-10.347-13.248l10.667-42.667c1.426-5.72 7.218-9.202 12.939-7.776 5.72 1.426 9.202 7.218 7.776 12.939l-10.667 42.667a10.666 10.666 0 01-10.368 8.085z" fill="#e6f0f9" data-original="#03a9f4"/>
  </g>
  <g xmlns="http://www.w3.org/2000/svg">
    <path d="M202.664 426.676a10.668 10.668 0 01-8.875-4.757l-21.333-32c-3.27-4.901-1.947-11.525 2.955-14.795s11.525-1.947 14.795 2.955l21.333 32c3.275 4.897 1.961 11.521-2.935 14.797a10.681 10.681 0 01-5.94 1.8z" fill="#fff" data-original="#283593"/>
    <path d="M181.33 458.676c-5.891-.002-10.665-4.78-10.663-10.671a10.667 10.667 0 012.471-6.823l53.333-64c3.776-4.524 10.505-5.131 15.029-1.355 4.524 3.776 5.131 10.505 1.355 15.029l-53.333 64a10.663 10.663 0 01-8.192 3.82z" fill="#fff" data-original="#283593"/>
  </g>
  <path xmlns="http://www.w3.org/2000/svg" d="M437.33 437.342a10.667 10.667 0 01-10.347-13.248l21.333-85.333c1.426-5.72 7.218-9.202 12.939-7.776 5.72 1.426 9.202 7.218 7.776 12.939l-21.333 85.333a10.665 10.665 0 01-10.368 8.085z" fill="#e6f0f9" data-original="#03a9f4"/>
  <path xmlns="http://www.w3.org/2000/svg" d="M321.405 29.129a53.908 53.908 0 00-40.661-18.453H159.997a10.666 10.666 0 00-10.496 8.768L106.834 254.11c-1.049 5.797 2.801 11.346 8.598 12.395.626.113 1.262.17 1.898.17h64a10.666 10.666 0 0010.347-8.085l19.328-77.248h34.325c41.958-.165 77.478-31.012 83.52-72.533l5.333-36.459a54.332 54.332 0 00-12.778-43.221z" fill="#fff" data-original="#283593"/>
</svg>
     <div className="credit-name">
      <div className="credit-type" style={{color:'white'}}>Paypal</div>
      <div className="credit-status" style={{color:'white'}}>Payment Cancelled</div>
     </div>
     <div className="credit-money is-cancel" >+$3.945</div>
    </div>
   </div>
  </div>
 </div>
 <style dangerouslySetInnerHTML={{ __html: customStyles }} />

 </div>
    
  
    
  )
}

export default Dashboard;
