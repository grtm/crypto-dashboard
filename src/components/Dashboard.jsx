import fire from "../Assets/🔥.png";
import time from "../Assets/⌛.png";
import "../style.scss";
import Header from "../pages/Header";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import MiddleInfo from "../pages/MiddleInfo"
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Header/>
      <div className="mainWrapper">
        <div className="wrapper">
          <div className="InfoBox1">
            <div className="heading">
              <div className="sub-head">
                <img src={fire} alt="trend" />
                <p>Trending </p>
              </div>
              <span>See all</span>
            </div>
            <div className="ContentBox">
              <div className="inner1">
                <small>1</small>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.66461 0.388544L0.0163591 8.05015C0.00177063 8.07791 -0.00325384 8.1097 0.00206445 8.14061C0.00738273 8.17151 0.0227468 8.1998 0.0457752 8.22109L9.89397 17.6627C9.92231 17.6882 9.9591 17.7024 9.99725 17.7024C10.0354 17.7024 10.0722 17.6882 10.1005 17.6627L19.9546 8.22109C19.9774 8.19965 19.9926 8.17138 19.9979 8.14054C20.0032 8.1097 19.9983 8.07797 19.984 8.05015L16.3358 0.388544C16.3261 0.361895 16.3082 0.338986 16.2848 0.323081C16.2613 0.307176 16.2334 0.299088 16.205 0.299969H3.79404C3.76608 0.300734 3.73891 0.309479 3.71575 0.325172C3.69258 0.340865 3.67439 0.362853 3.66331 0.388544H3.66461Z"
                    fill="#50AF95"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2678 8.83399C11.1972 8.83987 10.8317 8.8634 10.0182 8.8634C9.37009 8.8634 8.91022 8.84575 8.74516 8.83399C6.24054 8.7222 4.37229 8.28586 4.37229 7.76716C4.37229 7.24845 6.24054 6.80656 8.74516 6.69478V8.39797C8.90858 8.40974 9.37597 8.43915 10.0241 8.43915C10.802 8.43915 11.1909 8.40385 11.2619 8.39797V6.69478C13.7606 6.80656 15.6289 7.2429 15.6289 7.76128C15.6289 8.27965 13.7658 8.7222 11.2678 8.83399ZM11.2678 6.52384V4.99714H14.7568V2.66934H5.2564V4.99714H8.74516V6.52384C5.91042 6.65458 3.7771 7.21316 3.7771 7.89103C3.7771 8.56891 5.91042 9.12292 8.74516 9.25823V14.1443H11.2678V9.25823C14.0966 9.12749 16.2244 8.56859 16.2244 7.89692C16.2244 7.22525 14.0966 6.65327 11.2678 6.52416V6.52384Z"
                    fill="white"
                  />
                </svg>
                <p>Tether</p>
                <sub>USDT</sub>
              </div>
              <span>+0.40%</span>
            </div>
            <div className="ContentBox">
              <div className="inner1">
                <small>2</small>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                    fill="#FF007A"
                  />
                  <path
                    d="M7.65352 3.17697C7.47539 3.14947 7.46789 3.14572 7.55164 3.13322C7.71227 3.10822 8.09227 3.1426 8.35414 3.20447C8.96477 3.3501 9.52039 3.72197 10.1141 4.3826L10.2716 4.5576L10.4966 4.52197C11.4466 4.36885 12.4135 4.49072 13.2216 4.86385C13.4441 4.96635 13.7948 5.17072 13.8385 5.22385C13.8529 5.2401 13.8785 5.34822 13.8954 5.46322C13.9554 5.86135 13.9254 6.16635 13.8041 6.39447C13.7379 6.51822 13.7341 6.55697 13.7785 6.66322C13.7996 6.70711 13.8325 6.7442 13.8736 6.77027C13.9147 6.79635 13.9623 6.81036 14.011 6.81072C14.2123 6.81072 14.4285 6.48572 14.5285 6.03385L14.5685 5.85447L14.6473 5.94385C15.0798 6.43385 15.4191 7.10197 15.4773 7.57697L15.4929 7.70134L15.4198 7.58885C15.2948 7.3951 15.1698 7.2626 15.0085 7.15572C14.7185 6.96385 14.4116 6.89885 13.5991 6.85572C12.8654 6.81697 12.4498 6.75447 12.0385 6.6201C11.3379 6.39197 10.9848 6.0876 10.1523 4.99572C9.78289 4.51072 9.55414 4.2426 9.32727 4.02697C8.81039 3.53572 8.30289 3.27822 7.65352 3.17697Z"
                    fill="white"
                  />
                  <path
                    d="M14.0484 4.62625C14.0671 4.30125 14.1109 4.08687 14.1996 3.89125C14.2346 3.81375 14.2677 3.75 14.2727 3.75C14.2672 3.79387 14.2556 3.83677 14.2384 3.8775C14.174 4.0675 14.1634 4.3275 14.2077 4.62937C14.264 5.01313 14.2965 5.06813 14.7015 5.4825C14.8921 5.67687 15.1134 5.92187 15.1934 6.0275L15.339 6.21875L15.1934 6.08188C15.0152 5.915 14.6052 5.58813 14.5146 5.54188C14.454 5.51063 14.4446 5.51125 14.4071 5.54813C14.3727 5.58313 14.3652 5.63437 14.3609 5.87875C14.3534 6.25875 14.3015 6.50375 14.1759 6.7475C14.1084 6.87875 14.0977 6.85125 14.159 6.70188C14.2046 6.59062 14.209 6.54187 14.209 6.17375C14.209 5.43375 14.1209 5.25625 13.6052 4.95125C13.4501 4.86122 13.2907 4.77863 13.1277 4.70375C13.0472 4.67145 12.9691 4.63343 12.894 4.59C12.9084 4.57562 13.4109 4.72187 13.6127 4.8C13.914 4.91562 13.9634 4.93062 14.0002 4.91625C14.0246 4.90688 14.0365 4.83562 14.0484 4.62625ZM8.04398 5.89187C7.68211 5.39375 7.45836 4.62937 7.50648 4.05813L7.52149 3.88125L7.60399 3.89625C7.75899 3.92437 8.02586 4.02375 8.15086 4.1C8.49336 4.30813 8.64211 4.5825 8.79273 5.28625C8.83711 5.4925 8.89524 5.72563 8.92211 5.805C8.96461 5.93187 9.12711 6.22875 9.25961 6.42188C9.35461 6.56063 9.29086 6.62625 9.08086 6.6075C8.75961 6.57812 8.32461 6.27812 8.04398 5.89187ZM13.6096 9.60125C11.9177 8.92 11.3221 8.32875 11.3221 7.33125C11.3221 7.18437 11.3271 7.06437 11.3327 7.06437C11.339 7.06437 11.4046 7.1125 11.4784 7.17188C11.8215 7.44688 12.2059 7.56438 13.269 7.71938C13.8946 7.81125 14.2471 7.885 14.5721 7.9925C15.6046 8.335 16.2434 9.03 16.3959 9.97625C16.4396 10.2513 16.414 10.7669 16.3421 11.0388C16.2859 11.2538 16.1127 11.6406 16.0671 11.6556C16.0546 11.6594 16.0421 11.6113 16.0384 11.5444C16.0209 11.1894 15.8415 10.8431 15.5396 10.5837C15.1965 10.2894 14.7365 10.0544 13.6096 9.60125ZM12.4221 9.88375C12.4021 9.76303 12.3748 9.64364 12.3402 9.52625L12.2965 9.3975L12.3771 9.4875C12.4877 9.6125 12.5759 9.77125 12.6496 9.98375C12.7065 10.1456 12.7127 10.1938 12.7121 10.4569C12.7121 10.7156 12.7052 10.7694 12.6527 10.9156C12.5797 11.1301 12.4575 11.3244 12.2959 11.4831C11.9865 11.7981 11.5896 11.9719 11.0159 12.0444C10.9159 12.0569 10.6259 12.0781 10.3702 12.0913C9.72649 12.125 9.30336 12.1938 8.92273 12.3275C8.88841 12.3429 8.85154 12.3518 8.81398 12.3538C8.79898 12.3381 9.05773 12.1838 9.27211 12.0806C9.57398 11.935 9.87399 11.8556 10.5471 11.7438C10.8796 11.6881 11.2234 11.6213 11.3102 11.5944C12.134 11.3419 12.5577 10.6906 12.4221 9.88375Z"
                    fill="white"
                  />
                  <path
                    d="M12.7912 11.4694C12.5662 10.9862 12.515 10.5194 12.6381 10.0844C12.6512 10.0381 12.6725 10 12.685 10C12.7273 10.0153 12.7671 10.0368 12.8031 10.0637C12.9069 10.1337 13.1144 10.2513 13.6675 10.5525C14.3581 10.9294 14.7519 11.2212 15.02 11.5537C15.2544 11.8456 15.3994 12.1781 15.4694 12.5831C15.5087 12.8125 15.4856 13.3644 15.4269 13.5956C15.2413 14.3244 14.8094 14.8969 14.1944 15.2306C14.1363 15.2642 14.0762 15.2941 14.0144 15.32C14.0056 15.32 14.0381 15.2369 14.0875 15.1344C14.2938 14.7019 14.3181 14.2806 14.1613 13.8119C14.0656 13.525 13.87 13.1744 13.4756 12.5831C13.0169 11.8956 12.9044 11.7119 12.7912 11.4694ZM6.43687 14.0763C7.065 13.5463 7.84562 13.17 8.5575 13.0544C8.86375 13.0044 9.375 13.0244 9.65875 13.0969C10.1137 13.2131 10.5213 13.4744 10.7331 13.785C10.9394 14.0887 11.0287 14.3537 11.1206 14.9425C11.1581 15.175 11.1975 15.4081 11.2094 15.4612C11.2781 15.7662 11.4138 16.0106 11.5813 16.1331C11.8469 16.3275 12.305 16.3394 12.755 16.1644C12.802 16.1428 12.8516 16.1273 12.9025 16.1181C12.9188 16.1344 12.6925 16.2862 12.5325 16.3662C12.3437 16.4673 12.1322 16.5185 11.9181 16.515C11.5056 16.515 11.1631 16.3056 10.8775 15.8775C10.8212 15.7931 10.695 15.5412 10.5962 15.3169C10.295 14.6294 10.1462 14.4194 9.79625 14.19C9.49062 13.99 9.0975 13.9544 8.80188 14.0994C8.41313 14.29 8.305 14.7869 8.58312 15.1012C8.69375 15.2262 8.9 15.3344 9.06875 15.355C9.14236 15.3648 9.21721 15.3586 9.28824 15.3369C9.35927 15.3153 9.42482 15.2786 9.48045 15.2294C9.53609 15.1802 9.58052 15.1197 9.61074 15.0519C9.64096 14.984 9.65627 14.9105 9.65562 14.8363C9.65562 14.6287 9.57563 14.5112 9.37563 14.4206C9.1025 14.2975 8.80875 14.4412 8.81 14.6981C8.81062 14.8075 8.85813 14.8762 8.96812 14.9262C9.03875 14.9575 9.04 14.9606 8.9825 14.9488C8.73187 14.8962 8.67312 14.5944 8.875 14.3938C9.11687 14.1525 9.6175 14.2587 9.78937 14.5875C9.86188 14.7256 9.87 15.0013 9.80687 15.1675C9.66625 15.5394 9.255 15.7344 8.83812 15.6281C8.55438 15.5556 8.43875 15.4775 8.09687 15.125C7.5025 14.5125 7.27188 14.3937 6.41438 14.26L6.25 14.2344L6.43687 14.0763Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75 1.9775L3.81 2.05062C6.1275 4.88812 7.325 6.36062 7.40125 6.46562C7.52625 6.63937 7.47937 6.795 7.26437 6.9175C7.145 6.98562 6.89875 7.05437 6.77625 7.05437C6.63687 7.05437 6.48 6.9875 6.36562 6.87937C6.285 6.8025 5.95937 6.31625 5.2075 5.14938C4.85541 4.59787 4.49873 4.04931 4.1375 3.50375C4.10687 3.475 4.1075 3.47562 5.14875 5.33875C5.8025 6.50875 6.02375 6.92188 6.02375 6.9775C6.02375 7.09 5.9925 7.14875 5.85375 7.30375C5.6225 7.56187 5.51937 7.85187 5.44437 8.45187C5.36062 9.125 5.12563 9.6 4.47313 10.4131C4.09188 10.8894 4.02937 10.9769 3.9325 11.1687C3.81125 11.41 3.77812 11.5456 3.76437 11.8506C3.75 12.1731 3.77813 12.3819 3.87688 12.69C3.96313 12.96 4.05312 13.1387 4.28312 13.495C4.48187 13.8031 4.59625 14.0319 4.59625 14.1212C4.59625 14.1925 4.61 14.1925 4.91812 14.1231C5.655 13.9569 6.25312 13.6637 6.59 13.305C6.79812 13.0831 6.84687 12.9606 6.84875 12.6562C6.84938 12.4575 6.8425 12.4156 6.78875 12.3012C6.70125 12.115 6.54187 11.96 6.19062 11.72C5.73 11.405 5.53375 11.1513 5.47938 10.8031C5.43438 10.5175 5.48625 10.3156 5.74125 9.78187C6.00437 9.22937 6.07 8.99437 6.11437 8.4375C6.1425 8.0775 6.18187 7.93563 6.28562 7.82188C6.39313 7.70313 6.49063 7.6625 6.7575 7.62625C7.1925 7.56687 7.46937 7.45438 7.69687 7.245C7.89437 7.0625 7.97687 6.88688 7.98937 6.62313L7.99937 6.42313L7.88875 6.29437C7.73 6.10938 6.41687 4.66062 3.94875 1.94688L3.8825 1.875L3.75 1.9775ZM4.82125 12.2162C4.86485 12.139 4.87787 12.0483 4.85773 11.9619C4.83759 11.8756 4.78576 11.7999 4.7125 11.75C4.57 11.655 4.34812 11.7 4.34812 11.8238C4.34812 11.8612 4.36875 11.8887 4.41563 11.9131C4.495 11.9537 4.50062 12 4.43875 12.0931C4.37562 12.1881 4.38063 12.2719 4.45312 12.3287C4.56937 12.42 4.73375 12.3694 4.82125 12.2162ZM8.27375 7.73125C8.06938 7.79375 7.87125 8.01062 7.80937 8.2375C7.77187 8.37563 7.79312 8.61875 7.84937 8.69375C7.94 8.815 8.02812 8.84688 8.26562 8.845C8.73062 8.84188 9.13438 8.6425 9.18187 8.39312C9.22062 8.18875 9.0425 7.90562 8.79812 7.78062C8.67187 7.71688 8.40375 7.69125 8.27375 7.73125ZM8.8175 8.15625C8.88937 8.05438 8.8575 7.94375 8.73625 7.87C8.50375 7.72813 8.1525 7.845 8.1525 8.065C8.1525 8.17375 8.33562 8.29312 8.50312 8.29312C8.61562 8.29312 8.76812 8.22625 8.8175 8.15625Z"
                    fill="white"
                  />
                </svg>

                <p>Uniswap</p>
                <sub>UNI</sub>
              </div>
              <span>+2.30%</span>
            </div>

            <div className="ContentBox">
              <div className="inner1">
                <small>3</small>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_113_1775)">
                    <path
                      d="M0.87 17.6912H19.13V15.9521H0.87V17.6912ZM4.3478 6.9834L0 3.7782L0.7994 13.3434L4.3478 6.9834ZM6.9565 14.2129H19.1281L20 3.7782L6.9565 14.2129ZM14.7826 6.7329L4.5554 14.2129H1.7391L6.9357 5.6982L10.2528 0.299904L14.7826 6.7329Z"
                      fill="#3067F0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_113_1775">
                      <rect
                        width="20"
                        height="17.3913"
                        fill="white"
                        transform="translate(0 0.299904)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p>Wazirx</p>
                <sub>WRX</sub>
              </div>
              <div className="end">
                <sup>-0.06%</sup>
              </div>
            </div>
          </div>
          <div className="InfoBox2">
            <div className="heading">
              <div className="sub-head">
                <img src={time} alt="recent" />
                <p> Recently added</p>
              </div>
              <span>See all</span>
            </div>
            <div className="ContentBox">
              {" "}
              <div className="inner1">
                <small>1</small>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                    fill="#ED79AA"
                  />
                  <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.6575 5.58063L13.4888 6.7575C13.0677 6.33162 12.5662 5.99359 12.0135 5.76303C11.4607 5.53246 10.8677 5.41396 10.2688 5.41438C7.82189 5.41438 5.82501 7.35813 5.72001 9.79563H5.71501V14.2469C4.64949 13.0896 4.05942 11.5731 4.06251 10C4.06251 6.54813 6.84126 3.75 10.2688 3.75C11.0851 3.74942 11.8933 3.91094 12.6467 4.22519C13.4001 4.53944 14.0836 5.00016 14.6575 5.58063ZM14.6575 14.4194C13.523 15.5672 11.9837 16.2244 10.37 16.25V14.585C11.5444 14.5596 12.6628 14.0784 13.4888 13.2431L14.6575 14.4194Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.30078 15.49V9.79625H7.30516C7.39266 8.16813 8.73141 6.875 10.3702 6.875C12.0652 6.875 13.4395 8.25875 13.4395 9.96625C13.4395 11.6731 12.0652 13.0569 10.3708 13.0569C9.82487 13.0578 9.2888 12.9116 8.81891 12.6338V16.0781C8.28903 15.9506 7.7785 15.753 7.30078 15.4906V15.49ZM10.3702 11.5287C10.5747 11.5281 10.777 11.4872 10.9657 11.4083C11.1544 11.3294 11.3257 11.2141 11.4698 11.069C11.6139 10.9239 11.728 10.7518 11.8056 10.5626C11.8832 10.3734 11.9228 10.1708 11.922 9.96625C11.922 9.10313 11.227 8.40375 10.3702 8.40375C10.1657 8.40449 9.9634 8.44549 9.77479 8.52441C9.58619 8.60333 9.41497 8.71863 9.27092 8.86372C9.12688 9.00881 9.01282 9.18086 8.93526 9.37003C8.8577 9.5592 8.81817 9.7618 8.81891 9.96625C8.81891 10.8288 9.51328 11.5287 10.3702 11.5287Z"
                    fill="white"
                  />
                </svg>

                <p>Pinoxa</p>
                <sub>PINO</sub>
              </div>
              <small>$0.000314</small>
            </div>
            <div className="ContentBox">
              {" "}
              <div className="inner1">
                <small>2</small>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                    fill="#5546FF"
                  />
                  <path
                    d="M14.0801 15.2692L11.9274 11.89H15.0188V10.6134H4.8811V11.89H7.97247L5.81978 15.2692H7.42178L9.94994 11.3017L12.4781 15.2692H14.0801ZM15.0188 9.37434V8.09774H11.99L14.1176 4.75606H12.5031L9.94994 8.7861L7.39675 4.75606H5.78223L7.90989 8.09774H4.8811V9.38685L15.0188 9.37434Z"
                    fill="white"
                  />
                </svg>

                <p>Stacks</p>
                <sub>STK</sub>
              </div>
              <small>$0.0008765</small>
            </div>
            <div className="ContentBox">
              {" "}
              <div className="inner1">
                <small>3</small>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.9973 0.024091C12.0828 0.024091 14.9935 0.9642 17.6752 2.50092L17.8741 2.59131L17.8138 2.80223C17.8078 5.82143 16.9882 8.78036 15.4455 11.3717C13.9509 14.0233 11.7754 16.2349 9.14193 17.7717L8.9973 17.8741L8.84061 17.7656C6.17697 16.2229 4.15815 14.0474 2.62746 11.3777C1.09677 8.71407 0.17474 5.74911 0.17474 2.66965L0.150635 2.52502L0.253082 2.44065C2.92275 0.903936 5.90579 0.00601196 8.99127 0.00601196"
                    fill="#8D33E5"
                  />
                  <path
                    d="M17.7717 2.41656C15.108 0.867789 12.0828 0.0421812 8.99731 0.0301285V17.7717L9.19618 17.8922C11.8538 16.3434 14.0534 14.1257 15.5781 11.4621C17.1268 8.8105 17.9464 5.80336 17.9525 2.73595V2.51901L17.7717 2.41656Z"
                    fill="#7000DF"
                  />
                  <path
                    d="M17.9826 2.6998V2.46477L17.7837 2.35027C15.108 0.813556 12.0768 0 8.99129 0C5.90581 0 2.87456 0.813556 0.204895 2.35027L0 2.46477V2.6998C0.0120527 5.78528 0.825608 8.8105 2.36835 11.4741C3.91109 14.1438 6.12878 16.3555 8.79845 17.8982L8.99732 18.0127L9.19619 17.8982C11.8659 16.3615 14.0835 14.1438 15.6263 11.4802C17.1751 8.8105 17.9946 5.78528 18.0007 2.6998H17.9826ZM8.98527 17.1208C3.80865 14.0956 0.49416 8.68395 0.458002 2.68775C3.06741 1.22335 6.00223 0.451975 8.99732 0.451975C11.9924 0.451975 14.9272 1.22335 17.5366 2.68775C17.5065 8.696 14.186 14.0956 8.99732 17.1148L8.98527 17.1208Z"
                    fill="#7000DF"
                  />
                  <path
                    d="M8.99732 17.1148C3.80865 14.0956 0.49416 8.68395 0.458002 2.68775C3.06741 1.22335 6.00826 0.451975 8.99732 0.451975V0C5.91184 0 2.87456 0.807529 0.198869 2.35027L0 2.46477V2.6998C0.00602634 5.78528 0.825608 8.8105 2.36835 11.4741C3.91109 14.1438 6.12878 16.3555 8.79845 17.8982L8.99732 18.0127V17.1148Z"
                    fill="#8D33E5"
                  />
                  <path
                    d="M14.65 5.60449C14.65 5.5382 14.6379 5.46589 14.6138 5.40562C14.415 4.8271 14.1136 4.28473 13.734 3.80864C13.6436 3.68209 13.5351 3.56759 13.4387 3.44706L13.3603 3.35667C13.3302 3.32051 13.288 3.29038 13.2458 3.26627C13.1615 3.21806 13.0711 3.19396 12.9747 3.19396C12.9264 3.19998 12.8843 3.20601 12.8361 3.22409C12.8119 3.23012 12.7939 3.23614 12.7758 3.2482C12.7758 3.2482 9.50349 5.01994 8.99125 5.2851C8.48504 5.01994 5.23082 3.23614 5.15247 3.23012C5.11029 3.21204 5.06208 3.20601 5.01387 3.19998C4.91745 3.19998 4.82102 3.22409 4.74268 3.2723C4.7005 3.29641 4.66434 3.32654 4.63421 3.3627L4.55587 3.45309C4.45342 3.56759 4.357 3.68209 4.26058 3.81467C3.899 4.2787 3.6037 4.79094 3.39278 5.33933C3.3506 5.4237 3.33252 5.5141 3.33252 5.60449C3.33252 5.69489 3.3506 5.79131 3.38676 5.86965C3.42291 5.95402 3.48318 6.02634 3.55549 6.0866C3.56755 6.09865 3.5796 6.11071 3.59768 6.11673L3.63986 6.14686L3.70013 6.18905L4.21839 6.50844L5.24287 7.14724L6.26735 7.79205L7.11706 8.30429L7.12911 11.902V12.2998V12.4986C7.12911 12.5348 7.12911 12.577 7.12911 12.6131C7.13514 12.6794 7.15322 12.7517 7.17732 12.812C7.23156 12.9325 7.3099 13.035 7.41235 13.1133C7.5148 13.1917 7.63532 13.2459 7.76188 13.276C7.88843 13.3062 8.02101 13.3363 8.15359 13.3544C8.70801 13.4327 9.26243 13.4327 9.81686 13.3544C10.0157 13.3242 10.0639 13.3122 10.1965 13.282C10.3291 13.2519 10.4496 13.1977 10.5521 13.1133C10.6545 13.035 10.7389 12.9325 10.7871 12.812C10.8112 12.7457 10.8293 12.6794 10.8353 12.6131C10.8353 12.5709 10.8353 12.5348 10.8353 12.4986C10.8353 12.4986 10.8775 9.25043 10.8654 8.31032L11.7091 7.79808L12.7577 7.14724L13.7882 6.50242L14.3005 6.18302C14.4089 6.12878 14.4993 6.05044 14.5596 5.94799C14.6198 5.83952 14.656 5.72502 14.65 5.60449Z"
                    fill="#3F017F"
                  />
                  <path
                    d="M7.50881 8.09934C7.50881 7.79802 7.44252 7.49671 7.30994 7.21949C7.17736 6.94831 6.98452 6.70726 6.74949 6.52044C6.07454 5.98409 5.02596 5.79125 4.00751 6.0082C3.94122 6.02025 3.7544 5.90575 3.68811 5.8937C3.68811 5.8937 3.67003 5.88165 3.70619 5.91178C3.74235 5.94191 3.73632 5.97204 3.74235 5.97807L7.50278 8.1355V8.09934H7.50881Z"
                    fill="#F4A900"
                  />
                  <path
                    d="M10.7991 5.73705C11.6006 5.42368 12.2936 4.61615 12.613 3.62783C12.6371 3.55552 12.7637 3.53744 12.8119 3.48923C12.83 3.47718 12.7697 3.41089 12.7878 3.39883L8.99121 5.58639L9.03942 5.6105C9.30458 5.76116 9.59385 5.85758 9.90119 5.87566C10.2025 5.89976 10.5098 5.85155 10.7931 5.73705H10.7991Z"
                    fill="#78B6E4"
                  />
                  <path
                    d="M10.4195 8.20186C10.1604 8.35252 9.9374 8.56344 9.76866 8.81655C9.59992 9.06965 9.49747 9.35289 9.45529 9.65421C9.33476 10.5039 9.69032 11.5043 10.3894 12.2636C10.4436 12.3178 10.4376 12.4263 10.4496 12.4986C10.4496 12.5167 10.4737 12.5167 10.4918 12.5288L10.5099 8.15968L10.4195 8.20186Z"
                    fill="#20B5AC"
                  />
                  <path
                    d="M9.63614 9.81085C9.69037 9.50953 9.8109 9.23232 9.98567 8.98524C10.1604 8.73816 10.3955 8.53929 10.6606 8.39466L10.5039 8.1536L10.4196 8.20784C10.1604 8.3585 9.93746 8.56942 9.76872 8.82253C9.59998 9.07563 9.49753 9.35887 9.45535 9.66019C9.3529 10.4014 9.61203 11.2692 10.1544 11.9864C9.75064 11.3355 9.56382 10.5762 9.63614 9.81085Z"
                    fill="#3F017F"
                  />
                  <path
                    d="M10.8353 5.51404C10.5521 5.61649 10.2447 5.65265 9.9434 5.62252C9.64208 5.59239 9.35282 5.48994 9.09368 5.32723L8.95508 5.58033L9.03945 5.63457C9.29858 5.78523 9.59387 5.87563 9.89519 5.8937C10.1965 5.91781 10.4978 5.8696 10.775 5.7551C11.5705 5.39352 12.2093 4.76075 12.5769 3.96528C12.5769 3.95322 12.5227 3.88693 12.4684 4.00746C12.1069 4.67638 11.5344 5.2067 10.8353 5.51404Z"
                    fill="#3F017F"
                  />
                  <path
                    d="M6.53257 6.65306C6.75555 6.83385 6.93634 7.06888 7.05084 7.33404C7.16534 7.5992 7.21355 7.88846 7.19547 8.17773L7.48473 8.26812L7.57513 8.1717C7.59321 7.56907 7.32805 6.80372 6.85197 6.41201C6.29754 5.94196 5.12843 5.78527 4.34501 5.9058C4.31488 5.9058 4.30283 5.95401 4.50772 5.94798C5.24294 5.93593 5.96007 6.18301 6.53257 6.65306Z"
                    fill="#3F017F"
                  />
                  <path
                    d="M8.99738 13.0289C8.59361 13.0289 8.18985 12.9747 7.79813 12.8723C7.71376 12.8481 7.64145 12.7999 7.59324 12.7336C7.539 12.6674 7.50887 12.583 7.50887 12.4986V8.09939C7.50887 7.79808 7.44258 7.49676 7.31603 7.22557C7.18947 6.95439 6.99663 6.71334 6.7616 6.52652C6.08665 5.99017 5.03807 5.79733 4.01962 6.01428C3.97141 6.02633 3.91717 6.02633 3.86294 6.02031C3.8087 6.01428 3.76049 5.99017 3.7183 5.96607C3.62791 5.91183 3.56162 5.82144 3.53751 5.71899C3.51943 5.64065 3.52546 5.5623 3.55559 5.48999C3.68215 5.12841 3.84486 4.77285 4.03167 4.43538C4.23054 4.08585 4.4716 3.76043 4.76086 3.47719C4.82112 3.41693 4.90549 3.38077 4.98986 3.36872C5.07423 3.35667 5.16462 3.37474 5.23694 3.41693L8.94314 5.55025L9.03956 5.61052C9.30472 5.76117 9.59398 5.85759 9.90133 5.87567C10.2026 5.89978 10.51 5.85157 10.7872 5.73104C11.5887 5.41767 12.2817 4.61014 12.6011 3.62182C12.6192 3.57361 12.6433 3.5254 12.6734 3.48322C12.7096 3.44103 12.7518 3.4109 12.8 3.3868C12.8482 3.36269 12.8964 3.34461 12.9507 3.33859C13.0049 3.33256 13.0591 3.33859 13.1073 3.35667C13.1797 3.38077 13.2459 3.42296 13.2942 3.48322C13.5473 3.77851 13.7702 4.09188 13.9691 4.42935C14.174 4.77888 14.3307 5.15251 14.4331 5.54423C14.4512 5.62859 14.4452 5.71899 14.4151 5.79733C14.3789 5.87567 14.3247 5.94196 14.2463 5.98415L10.516 8.13555L10.4136 8.19581C10.1544 8.34647 9.93146 8.55739 9.76875 8.8105C9.60604 9.06361 9.49153 9.34684 9.45538 9.64213C9.33485 10.4918 9.6904 11.4922 10.3895 12.2515C10.4377 12.3058 10.4738 12.3721 10.4859 12.4384C10.4979 12.5107 10.4979 12.583 10.4738 12.6493C10.4497 12.7156 10.4075 12.7758 10.3533 12.824C10.293 12.8723 10.2267 12.9024 10.1544 12.9144C9.76875 12.9868 9.38306 13.0229 8.99738 13.0289Z"
                    fill="white"
                  />
                </svg>

                <p>Symbols</p>
                <sub>SYB</sub>
              </div>
              <small>$0.000001239</small>
            </div>
          </div>
        </div>
        <MiddleInfo />
      </div>
    </div>
  );
};

export default Dashboard;
