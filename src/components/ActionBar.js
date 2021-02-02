import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "../home.css";

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function ActionBar({ comments, shares, likes }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoMetrics">
      <div className="videoMetrics_btn">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{nFormatter(liked ? `${likes + 1} ` : `${likes}`, 1)}</p>
      </div>
      <div className="videoMetrics_btn">
        <svg
          width="35"
          height="35"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#BubbleEllipsisRightFill_clip0)">
            <g opacity="0.9" filter="url(#BubbleEllipsisRightFill_filter0_d)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.0393 14.7137C17.75 13 18.75 11.215 18.75 9.13662C18.75 4.91897 14.8887 1.49997 10.125 1.49997C5.36129 1.49997 1.5 4.91897 1.5 9.13675C1.5 13.3545 5.48622 16.25 10.25 16.25V17.6487C10.25 18.0919 10.7095 18.3771 11.0992 18.1659C12.3166 17.5062 14.5725 16.183 16.0393 14.7137ZM5.93527 8.10679C6.61608 8.10679 7.16797 8.65471 7.16797 9.32962C7.16797 10.0059 6.61608 10.5538 5.93527 10.5538C5.2556 10.5538 4.70368 10.0059 4.70368 9.32962C4.70368 8.65471 5.2556 8.10679 5.93527 8.10679ZM11.3572 9.32962C11.3572 8.65471 10.8055 8.10679 10.125 8.10679C9.44459 8.10679 8.89289 8.65471 8.89289 9.32962C8.89292 10.0059 9.44462 10.5538 10.125 10.5538C10.8055 10.5538 11.3572 10.0059 11.3572 9.32962ZM14.3146 8.10679C14.9953 8.10679 15.5464 8.65471 15.5464 9.32962C15.5464 10.0059 14.9953 10.5538 14.3146 10.5538C13.6339 10.5538 13.082 10.0059 13.0821 9.32962C13.0821 8.65471 13.6339 8.10679 14.3146 8.10679Z"
              ></path>
            </g>
            <path
              opacity="0.1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.25 16.2499C10.25 16.2499 15.0278 15.8807 17.025 13.3234C15.0278 16.1364 13.0307 17.6708 11.2831 18.1822C9.53561 18.6937 10.25 16.2499 10.25 16.2499Z"
              fill="url(#BubbleEllipsisRightFill_paint0_linear)"
            ></path>
          </g>
          <defs>
            <filter
              id="BubbleEllipsisRightFill_filter0_d"
              x="0.5"
              y="1.49997"
              width="19.25"
              height="18.737"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="1"></feOffset>
              <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              ></feBlend>
            </filter>
            <linearGradient
              id="BubbleEllipsisRightFill_paint0_linear"
              x1="8.50426"
              y1="15.6957"
              x2="9.29499"
              y2="18.1805"
              gradientUnits="userSpaceOnUse"
            >
              <stop></stop>
              <stop offset="1" stopOpacity="0.01"></stop>
            </linearGradient>
            <clipPath id="BubbleEllipsisRightFill_clip0">
              <rect width="35" height="35" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <p>{nFormatter(comments, 1)}</p>
      </div>
      <div className="videoMetrics_btn">
        <svg
          width="35"
          height="35"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#PCShare_clip0)">
            <g opacity="0.9" filter="url(#PCShare_filter0_d)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9376 3.17495C10.9376 2.58272 11.6469 2.27873 12.0758 2.68715L18.6021 8.90241C19.1764 9.44937 19.1564 10.3717 18.5588 10.8931L12.0541 16.5689C11.6184 16.9491 10.9376 16.6397 10.9376 16.0614V13.4894C10.9376 13.4894 3.95344 12.2312 1.7131 16.3434C1.50423 16.7268 0.690072 16.8609 0.855563 14.948C1.54761 11.4273 2.96196 5.93084 10.9376 5.93084V3.17495Z"
              ></path>
            </g>
            <path
              opacity="0.03"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7538 6.21161L17.0486 8.80136C17.2777 9.25947 17.1677 9.81453 16.7812 10.1506L10.9824 15.193C10.9824 15.193 10.7017 16.5964 11.5437 16.5964C12.3857 16.5964 19.1218 10.4217 19.1218 10.4217C19.1218 10.4217 19.4025 9.57964 18.5605 8.73763C17.7185 7.89563 15.7538 6.21161 15.7538 6.21161Z"
            ></path>
            <path
              opacity="0.09"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.9374 6.22983V13.5272C10.9374 13.5272 4.25359 12.5854 2.16026 15.7726C0.146021 18.8394 0.331011 12.3091 3.36331 9.05711C6.39561 5.8051 10.9374 6.22983 10.9374 6.22983Z"
              fill="url(#PCShare_paint0_radial)"
            ></path>
          </g>
          <defs>
            <filter
              id="PCShare_filter0_d"
              x="-0.166473"
              y="2.5"
              width="20.1867"
              height="16.2363"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="1"></feOffset>
              <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              ></feBlend>
            </filter>
            <radialGradient
              id="PCShare_paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(11.1827 18.2553) rotate(-113.046) scale(8.93256 8.78076)"
            >
              <stop></stop>
              <stop offset="0.995496" stopOpacity="0.01"></stop>
              <stop offset="1" stopOpacity="0.01"></stop>
            </radialGradient>
            <clipPath id="PCShare_clip0">
              <rect width="30" height="30" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <p>{nFormatter(shares, 1)}</p>
      </div>
    </div>
  );
}
export default ActionBar;
