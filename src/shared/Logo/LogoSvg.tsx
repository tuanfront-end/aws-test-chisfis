import React from "react";

const LogoSvg = () => {
  return (
    <svg
      className={`block max-h-12 dark:hidden`}
      width="104"
      height="50"
      viewBox="0 0 104 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="25" r="24" fill="currentColor" />
      <path
        d="M30.239 28.708C31.6697 28.708 33.0017 28.56 34.235 28.264C35.493 27.9433 36.5783 27.45 37.491 26.784C38.4283 26.0933 39.156 25.2053 39.674 24.12C40.192 23.01 40.451 21.6533 40.451 20.05C40.451 18.4713 40.1797 17.127 39.637 16.017C39.119 14.907 38.4037 14.019 37.491 13.353C36.5783 12.6623 35.493 12.169 34.235 11.873C33.0017 11.5523 31.6697 11.392 30.239 11.392H26.169C24.7137 11.392 23.357 11.5523 22.099 11.873C20.8657 12.169 19.7927 12.6623 18.88 13.353C17.9673 14.019 17.2397 14.907 16.697 16.017C16.179 17.127 15.92 18.4713 15.92 20.05C15.92 21.6533 16.179 23.01 16.697 24.12C17.2397 25.2053 17.9673 26.0933 18.88 26.784C19.7927 27.4747 20.8657 27.968 22.099 28.264C23.357 28.56 24.7137 28.708 26.169 28.708H30.239ZM26.169 26.636C25.059 26.636 24.0107 26.525 23.024 26.303C22.0373 26.081 21.174 25.7233 20.434 25.23C19.694 24.712 19.102 24.0337 18.658 23.195C18.214 22.3563 17.992 21.308 17.992 20.05C17.992 18.8167 18.214 17.7807 18.658 16.942C19.102 16.1033 19.694 15.425 20.434 14.907C21.1987 14.389 22.0743 14.019 23.061 13.797C24.0477 13.575 25.0837 13.464 26.169 13.464H30.239C31.3243 13.464 32.3603 13.575 33.347 13.797C34.3337 14.019 35.197 14.389 35.937 14.907C36.677 15.425 37.269 16.1033 37.713 16.942C38.157 17.7807 38.379 18.8167 38.379 20.05C38.379 21.2833 38.157 22.3193 37.713 23.158C37.2937 23.9967 36.714 24.675 35.974 25.193C35.234 25.711 34.3707 26.081 33.384 26.303C32.3973 26.525 31.349 26.636 30.239 26.636H26.169ZM13.589 20.05C13.589 18.052 13.8973 16.3623 14.514 14.981C15.1553 13.5997 16.031 12.4773 17.141 11.614C18.2757 10.726 19.6077 10.097 21.137 9.727C22.691 9.33233 24.3683 9.135 26.169 9.135H30.239C32.0397 9.135 33.7047 9.33233 35.234 9.727C36.7633 10.1217 38.083 10.7507 39.193 11.614C40.3277 12.4773 41.2033 13.5997 41.82 14.981C42.4613 16.3623 42.782 18.052 42.782 20.05C42.782 22.048 42.4613 23.7377 41.82 25.119C41.2033 26.5003 40.3277 27.6227 39.193 28.486C38.083 29.3493 36.7633 29.9783 35.234 30.373C33.7047 30.7677 32.0397 30.965 30.239 30.965H26.169C24.3683 30.965 22.691 30.78 21.137 30.41C19.6077 30.0153 18.2757 29.3863 17.141 28.523C16.031 27.635 15.1553 26.5003 14.514 25.119C13.8973 23.7377 13.589 22.048 13.589 20.05ZM11.517 20.05C11.517 22.3933 11.8747 24.3913 12.59 26.044C13.33 27.672 14.3413 29.004 15.624 30.04C16.9313 31.076 18.473 31.8407 20.249 32.334C22.0497 32.8027 24.023 33.037 26.169 33.037H30.239C32.385 33.037 34.346 32.8027 36.122 32.334C37.898 31.8407 39.4273 31.076 40.71 30.04C42.0173 29.004 43.0287 27.672 43.744 26.044C44.4593 24.3913 44.817 22.3933 44.817 20.05C44.817 17.7067 44.4593 15.721 43.744 14.093C43.0287 12.4403 42.0173 11.096 40.71 10.06C39.4273 9.024 37.898 8.27166 36.122 7.803C34.346 7.30967 32.385 7.063 30.239 7.063H26.169C24.023 7.063 22.0497 7.30967 20.249 7.803C18.473 8.27166 16.9313 9.024 15.624 10.06C14.3413 11.096 13.33 12.4403 12.59 14.093C11.8747 15.721 11.517 17.7067 11.517 20.05ZM10.592 20.05C10.592 17.534 10.9743 15.4003 11.739 13.649C12.5037 11.873 13.5767 10.43 14.958 9.32C16.3393 8.21 17.9797 7.40833 19.879 6.915C21.803 6.397 23.8997 6.138 26.169 6.138H30.239C31.6697 6.138 33.014 6.22433 34.272 6.397C35.5547 6.545 36.8127 6.878 38.046 7.396C39.2793 7.88933 40.5003 8.60467 41.709 9.542C42.9423 10.4547 44.2127 11.688 45.52 13.242C46.63 14.352 47.5427 15.8197 48.258 17.645C48.9733 19.4703 49.331 21.5053 49.331 23.75C49.331 26.2413 48.9487 28.3627 48.184 30.114C47.444 31.8653 46.3833 33.2837 45.002 34.369C43.6453 35.479 42.0173 36.2807 40.118 36.774C38.2433 37.292 36.1837 37.551 33.939 37.551H29.869C27.353 37.551 25.0097 37.2673 22.839 36.7C20.6683 36.1327 18.88 35.1583 17.474 33.777C16.068 32.5437 14.921 31.3843 14.033 30.299C13.145 29.189 12.442 28.0913 11.924 27.006C11.4307 25.9207 11.0853 24.8107 10.888 23.676C10.6907 22.5413 10.592 21.3327 10.592 20.05ZM30.239 25.711C31.201 25.711 32.1137 25.6247 32.977 25.452C33.865 25.2547 34.642 24.934 35.308 24.49C35.974 24.046 36.492 23.4663 36.862 22.751C37.2567 22.011 37.454 21.1107 37.454 20.05C37.454 19.458 37.38 18.9153 37.232 18.422C36.2207 18.126 35.123 17.978 33.939 17.978H29.869C28.8823 17.978 27.945 18.0767 27.057 18.274C26.169 18.4713 25.3797 18.792 24.689 19.236C24.023 19.68 23.4927 20.272 23.098 21.012C22.7033 21.752 22.506 22.6647 22.506 23.75C22.506 24.342 22.5553 24.8353 22.654 25.23C23.172 25.4027 23.727 25.526 24.319 25.6C24.911 25.674 25.5277 25.711 26.169 25.711H30.239Z"
        fill="white"
      />
      <path
        d="M73.9547 16.152V33H69.8507V22.896L66.0827 33H62.7707L58.9787 22.872V33H54.8747V16.152H59.7227L64.4507 27.816L69.1307 16.152H73.9547ZM76.09 26.28C76.09 24.904 76.346 23.696 76.858 22.656C77.386 21.616 78.098 20.816 78.994 20.256C79.89 19.696 80.89 19.416 81.994 19.416C82.938 19.416 83.762 19.608 84.466 19.992C85.186 20.376 85.738 20.88 86.122 21.504V19.608H90.226V33H86.122V31.104C85.722 31.728 85.162 32.232 84.442 32.616C83.738 33 82.914 33.192 81.97 33.192C80.882 33.192 79.89 32.912 78.994 32.352C78.098 31.776 77.386 30.968 76.858 29.928C76.346 28.872 76.09 27.656 76.09 26.28ZM86.122 26.304C86.122 25.28 85.834 24.472 85.258 23.88C84.698 23.288 84.01 22.992 83.194 22.992C82.378 22.992 81.682 23.288 81.106 23.88C80.546 24.456 80.266 25.256 80.266 26.28C80.266 27.304 80.546 28.12 81.106 28.728C81.682 29.32 82.378 29.616 83.194 29.616C84.01 29.616 84.698 29.32 85.258 28.728C85.834 28.136 86.122 27.328 86.122 26.304ZM97.035 29.616H102.843V33H92.451V29.736L98.019 22.992H92.499V19.608H102.723V22.872L97.035 29.616Z"
        fill="#1F2937"
      />
    </svg>
  );
};

export default LogoSvg;
