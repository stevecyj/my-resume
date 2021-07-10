<template>
  <div>
    <div v-if="navActive == 'works' || navActive == 'experience' || navActive == 'contact'" class="bg-img2"></div>
    <div v-else class="bg-img1"></div>
    <!-- 這裡是 navbar  -->
    <nav class="navbar navbar-expand-lg myNav" :class="{ 'scroll-color': viewprotH > 300 }">
      <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03">
        <span><i class="fas fa-list-ul"></i></span>
      </button>
      <a class="navbar-brand" href="#"><i class="fas fa-feather-alt"></i> Steve Resume</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#about" v-scroll-to="'#about'" :class="{ active: navActive == 'about' }">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skill" v-scroll-to="'#skill'" :class="{ active: navActive == 'skill' }"
              >Skills</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#works" v-scroll-to="'#works'" :class="{ active: navActive == 'works' }"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#experience"
              v-scroll-to="'#experience'"
              :class="{ active: navActive == 'experience' }"
              >Experience</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" v-scroll-to="'#contact'" :class="{ active: navActive == 'contact' }"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- 這裡是 header  -->
    <div class="h100 top-img text-white d-flex align-items-center" style="backgroundPosition:center center">
      <div class="container">
        <div class="row">
          <div class="col-md-6  d-flex justify-content-center">
            <div class="imgHide">
              <div class="img-profile"></div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-md-center justify-content-center">
            <div class="titleHide mx-md-5">
              <div class="top-content text-center">
                <h1 class="text_effect pb-3">Hello I'm Steve</h1>
                <h4 class="text_effect py-2 ">There is nothing difficult</h4>
                <h4 class="text_effect py-2 ">in this world</h4>
                <h4 class="text_effect py-2">As long as there is</h4>
                <h4 class="text_effect py-2">enthusiasm and interest</h4>
                <h4 class="text_effect py-2">Can maintain their motivation</h4>
                <h4 class="text_effect py-2">to move forward</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 About  -->
    <div id="about">
      <div class="container">
        <h1 class="myTitle-white">About Myself</h1>
        <div class="row aboutHide" :class="{ active: aboutShow }">
          <div class="col-md-6">
            <img src="https://fakeimg.pl/500x400/?text=Hello" alt="" class="img-fluid myShadow rounded my-3" />
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <div class="p-4 my-3 bgWhite">
              <p>Hello, my name is Cao Youjing (Steve)</p>

              <p>
                Work hard to study various technologies and integrate them. In the process of continuous pursuit,
                continuous learning, and continuous creation, Seeing others smile on my work, this sense of
                accomplishment makes me feel that life is extremely rich.
              </p>

              <p>
                In 2019, I started to set the front-end career direction for myself, and during this period began to
                develop the skill tree.
              </p>
              <p>
                2019 officially entered the front-end work, and also began to study the use of the Laravel framework,
                currently mainly involved in 3 large-scale projects as follows.
              </p>
              <p>1. Vue-based entertainment city system</p>
              <p>2. Vue-based monitoring backstage system</p>
              <p>3. PHP monitoring system refactoring into Laravel and Vue architecture</p>

              <p>Interesting research directions in the future：</p>
              <p>* Linux system</p>
              <p>* Cloud service</p>
              <p>* docker、kubernetes automated deployment</p>
              <p>* CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Skill  -->
    <div id="skill">
      <div class="container">
        <h1 class="myTitle-white">Skills</h1>
        <div class="d-flex justify-content-center pb-5">
          <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button @click="skillDispaly = 'list'" type="button" class="btn btn-info">
              清單 <i class="far fa-list-alt fa-1x"></i>
            </button>
            <button @click="skillDispaly = 'gallery'" type="button" class="btn btn-primary">
              圖示 <i class="fas fa-grip-horizontal fa-1x"></i>
            </button>
          </div>
        </div>

        <div class="row d-flex justify-content-center" v-if="skillDispaly == 'list'">
          <div class="col-md-8 text-white skillList">
            <h3>前端(Front-end)</h3>
            <ul>
              <li><b>Vue</b> - data 雙向綁定、模板元件化、Router、Vuex</li>
              <li><b>JavaScript</b> - 熟悉 DOM 模型、閉包、AJAX、ES6+ 等基本概念</li>
              <li><b>jQuery</b> - 為網頁添加具互動性的效果</li>
              <li><b>HTML/CSS</b> - 撰寫語意化標籤、排版</li>
            </ul>
            <h3>UI 框架(UI-framework)</h3>
            <ul>
              <li><b>Bootstrap</b></li>
              <li><b>AntD Vue</b></li>
              <li><b>Tailwind CSS</b></li>
            </ul>
            <h3>後端(Back-end)</h3>
            <ul>
              <li><b>Laravel</b> - 建立 API</li>
              <li><b>Postman</b> - API 測試</li>
            </ul>
            <h3>DataBase</h3>
            <ul>
              <li><b>Firebase</b> - mysql</li>
            </ul>
            <h3>其他(Other)</h3>
            <ul>
              <li><b>Git</b> - 團隊協作</li>
            </ul>
          </div>
        </div>
        <div class="row" v-if="skillDispaly == 'gallery'">
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/html.png" alt="Avatar" style="width:150px;height:150px;" />
                </div>
                <div class="flip-card-back">
                  <h2>HTML</h2>
                  <p><i class="far fa-check-circle"></i> 善用語意化命名結構</p>
                  <p><i class="far fa-check-circle"></i> SVG 繪圖</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/css.png" alt="Avatar" style="width:150px;height:150px;" />
                </div>
                <div class="flip-card-back">
                  <h2>CSS</h2>
                  <p><i class="far fa-check-circle"></i> RWD 手刻 breakpoints</p>
                  <p><i class="far fa-check-circle"></i> Flex / Grid 排版</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/javascript.png" alt="Avatar" style="width:150px;height:150px;" />
                </div>
                <div class="flip-card-back">
                  <h2>JavaScript</h2>
                  <p><i class="far fa-check-circle"></i> 熟悉 DOM 模型、AJAX、ES6+ 等基本概念</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/jquery.png" alt="Avatar" style="width:150px;height:150px;" />
                </div>
                <div class="flip-card-back">
                  <h2>jQuery</h2>
                  <p><i class="far fa-check-circle"></i> 靈活操作 DOM 元素</p>
                  <p><i class="far fa-check-circle"></i> AJAX 方法使用</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    class="mt-3"
                    src="../assets/skill/bootstrap.png"
                    alt="Avatar"
                    style="width:180px;height:180px;"
                  />
                </div>
                <div class="flip-card-back">
                  <h2>Bootstrap</h2>
                  <p><i class="far fa-check-circle"></i> flexbox 網格</p>
                  <p><i class="far fa-check-circle"></i> RWD 自適應排版</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-5" src="../assets/skill/vue.png" alt="Avatar" style="width:130px;height:130px;" />
                </div>
                <div class="flip-card-back">
                  <h2>Vue</h2>
                  <p><i class="far fa-check-circle"></i> data 雙向綁定</p>
                  <p><i class="far fa-check-circle"></i> 模板元件化</p>
                  <p><i class="far fa-check-circle"></i> Vuex</p>
                  <p><i class="far fa-check-circle"></i> Router</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/nodejs.png" alt="Avatar" style="width:200px;height:200px;" />
                </div>
                <div class="flip-card-back">
                  <h2>Node.js</h2>
                  <p><i class="far fa-check-circle"></i> npm 工具使用</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/postman.png" alt="Avatar" style="width:150px;height:150px;" />
                </div>
                <div class="flip-card-back">
                  <h2>Postman</h2>
                  <p><i class="far fa-check-circle"></i> API 測試</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-3" src="../assets/skill/webpack.png" alt="Avatar" style="width:130px;height:150px;" />
                </div>
                <div class="flip-card-back">
                  <h2>Webpack</h2>
                  <p><i class="far fa-check-circle"></i> 轉換 ES6、CSS預處理(less、sass) 檔案打包網站</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-3" src="../assets/skill/git.png" alt="Avatar" style="width:130px;height:130px;" />
                </div>
                <div class="flip-card-back">
                  <h2>Git</h2>
                  <p><i class="far fa-check-circle"></i> Github 進行團隊協作</p>
                  <p><i class="far fa-check-circle"></i> Github 部署</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Works  -->
    <div id="works">
      <div class="container">
        <h1 class="myTitle-blue">Projects</h1>
        <div class="row">
          <div class="col-md-4">
            <div class="transform_3d">
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[0])"
                    ><img class="img-fluid" src="../assets/works/as-1-m.png" alt="img"
                  /></a>
                </div>
              </div>
              <h3 class="text-center py-4">AS Monitor</h3>
            </div>
          </div>
          <div class="col-md-4">
            <div class="transform_3d">
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[1])"
                    ><img class="img-fluid" src="../assets/works/canvas-game.png" alt="img"
                  /></a>
                </div>
              </div>
              <h3 class="text-center py-4">Canvas Shoot Game</h3>
            </div>
          </div>
          <!-- <div class="col-md-4">
            <div class="transform_3d">
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[2])"
                    ><img class="img-fluid" src="../assets/works/blog.png" alt="img"
                  /></a>
                </div>
              </div>
              <h3 class="text-center py-4">夢想家 Blog</h3>
            </div>
          </div> -->
          <!-- <div class="col-md-4">
            <div class="transform_3d">
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[3])"
                    ><img class="img-fluid" src="../assets/works/image-wall.png" alt="img"
                  /></a>
                </div>
              </div>
              <h3 class="text-center py-4">Unsplash API 圖片牆</h3>
            </div>
          </div> -->
          <!-- <div class="col-md-4">
            <div class="transform_3d">
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[4])"
                    ><img class="img-fluid" src="../assets/works/video.png" alt="img"
                  /></a>
                </div>
              </div>
              <h3 class="text-center py-4">Youtube API 影片搜尋</h3>
            </div>
          </div> -->
          <!-- <div class="col-md-4">
            <div class="transform_3d">

              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[4])"><img class="img-fluid" src="../assets/works/snake.png"
                      alt="img"></a>
                </div>
              </div>
              <h3 class="text-center py-4">CSS 貪食蛇</h3>
            </div>
          </div> -->
          <!-- <div class="col-md-4">
            <div class="transform_3d">
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[5])"
                    ><img class="img-fluid" src="../assets/works/ship.png" alt="img"
                  /></a>
                </div>
              </div>
              <h3 class="text-center py-4">戰船遊戲</h3>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <!-- 預先載入圖片 -->
    <div class="d-none">
      <img v-for="(item, index) in works" :key="index" :src="item.imgUrl" alt="" />
    </div>

    <!-- works Modal顯示詳細資料 -->
    <div class="modal fade" id="worksModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content myCard_content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ works_modal.title }}
            </h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="works_modal.imgUrl" alt="img" class="img-fluid" />
            <ul class="mt-3">
              <li class="py-2" v-for="(content, index) in works_modal.content" :key="index">
                {{ content }}
              </li>
            </ul>
          </div>
          <div class="">
            <div v-if="works_modal.href == ''" class=" text-center m-3 pb-4">
              <button class="goToWeb-noDemo rounded-pill">
                版權問題無法提供 Demo
              </button>
            </div>
            <div v-else class=" text-center m-3 pb-4">
              <a :href="works_modal.href" target="_blank" class="goToWeb rounded-pill">點擊前往作品網頁</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Experience  -->
    <div id="experience">
      <div class="container">
        <h1 class="myTitle-white">Experience</h1>
        <!-- 雲中雲 -->
        <!-- <div class="row d-flex justify-content-center">
          <div class="col-md-3 justify-content-md-end d-none d-md-flex">
            <div class="position-relative exInner">
              <img
                class="img-fluid exImg"
                src="../assets/experience/iconfinder_Notebook_by_Artdesigner_60879.png"
                alt="img"
              />
              <div class="exLine"></div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">
                雲中雲 | 前端工程師 |
                <span class="d-inline-block"><i class="fas fa-clock"></i> 2019 年 11 月 - 2020 年 1 月</span>
              </h4>
              <p><i class="fas fa-tools pr-3"></i> admin 後台串接 API</p>
              <p><i class="fas fa-tools pr-3"></i> 購彩網前台架構遷移，整個專案由 React 重構成 Vue 架構</p>
              <p>
                在任職期間研究並開始使用 React 框架，因為有個重大遷移專案，必須熟悉 React 及 Vue
                兩者的架構才能做到最相容的轉換，UI 元件的客製化及 jsx
                的使用上得到了飛躍式的進步，並且在12月底完成遷移並測試完成。可惜在1月初陸方資金發生了一些問題，遺憾的無緣與台灣同事再繼續共事。
              </p>
            </div>
          </div>
        </div> -->
        <!-- Neithnet -->
        <div class="row d-flex justify-content-center">
          <div class="col-md-3 justify-content-md-end d-none d-md-flex">
            <div class="position-relative exInner">
              <img
                class="img-fluid exImg"
                src="../assets/experience/iconfinder_Notebook_by_Artdesigner_60879.png"
                alt="img"
              />
              <div class="exLine"></div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">
                Neithnet | 助理工程師 |
                <span class="d-inline-block"><i class="fas fa-clock"></i> 2019 年 11 月 - 2021 年</span>
              </h4>
              <p><i class="fas fa-tools pr-3"></i> Vue 專案開發</p>
              <ul>
                <li>跨部門合作</li>
                <li>開發2個平台專案</li>
              </ul>
              <p><i class="fas fa-tools pr-3"></i> 監控管理自動化</p>
              <ul>
                <li>測試、操作網管設備 api</li>
                <li>操作歷史記錄留存</li>
                <li>客製化功能</li>
                <li>上架設備至監控平台</li>
              </ul>
              <p><i class="fas fa-tools pr-3"></i> 建立監控 api</p>
              <ul>
                <li>維護已上線的監控平台</li>
                <li>根據設備實際狀況，調整、新增 api、資料庫內容</li>
              </ul>
              <p><i class="fas fa-tools pr-3"></i> 辦公室環控監控及告警系統</p>
              <ul>
                <li>偵測主機蓄電量、溫度、漏水情況、連外線路是否正常</li>
                <li>發送告警訊息至通訊軟體</li>
              </ul>
              <p><i class="fas fa-tools pr-3"></i> 串接第三方服務</p>
              <ul>
                <li>測試第三方服務 api</li>
                <li>平台服務自動化</li>
              </ul>
              <p><i class="fas fa-tools pr-3"></i> 客製監控系統</p>
              <ul>
                <li>使用 Vue 建立後台頁面</li>
                <li>使用 Laravel 建立 api</li>
                <li>監控數量約 40 部設備</li>
              </ul>
              <p><i class="fas fa-tools pr-3"></i>技術分享</p>
              <ul>
                <li>整理Vue、Larave 常用功能，協助單位導入框架開發環境</li>
                <li>將部分既有專案導入 Vue、 Laravel</li>
              </ul>
              <p><i class="fas fa-tools pr-3"></i>建立形象網站後台</p>
              <ul>
                <li>整理Vue、Larave 常用功能，協助單位導入框架開發環境</li>
                <li>將形象網站建立內容管理系統，以利上架文章、上傳檔案</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 學歷 -->
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 justify-content-md-end d-none d-md-flex">
            <div class="position-relative exInner">
              <img class="img-fluid exImg" src="../assets/experience/Graduation.png" alt="img" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">
                中原大學 | 機械工程 |
                <span class="d-inline-block"><i class="fas fa-clock"></i> 2004 年 6 月 畢業</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Contact  -->
    <div id="contact">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6 text-center text-white">
            <div class="contact_card" :class="{ active: contactShow }">
              <h1 class="py-4">Contact Me</h1>
              <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                  <div class="px-3">
                    <img class="img-fluid img-thumbnail" src="https://fakeimg.pl/300x300/?text=Hello" alt="" />
                  </div>
                </div>
              </div>
              <h3 class="py-3">Steve</h3>
              <h5 class="pb-3">
                <a href="mailto:ycsteven.tsao@gmail.com" class="text-white"
                  ><i class="fas fa-envelope"></i> livepower0815@gmail.com</a
                >
              </h5>
              <h5 class="pb-3"><i class="fas fa-phone"></i> 0953-335-979</h5>
              <!-- <a href="https://www.facebook.com/profile.php?id=100000312843510" target="_blank"
                ><i class="fab fa-facebook-square"></i
              ></a> -->
              <a href="https://github.com/stevecyj" class="" target="_blank"><i class="fab fa-github"></i></a>
              <!-- <a href="https://www.cakeresume.com/livepower0815" target="_blank"><i class="fas fa-copyright"></i></a> -->
              <a href="https://www.linkedin.com/in/steve-tsao-67620811b/" target="_blank"
                ><i class="fab fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Footer  -->
    <div id="footer">
      <p class="text-white">Copyright © Steve Resume Website</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'home',
  data() {
    return {
      viewprotH: 0,
      viewprotW: 0,
      windowH: 0,
      skillDispaly: 'list',
      works_modal: {},
      navLinksH: {},
      works: [
        {
          title: '辦公室主機監控平台',
          imgUrl: require('../assets/works/as-2.png'),
          href: '',
          content: [
            '前端框架： Vue.js',
            'Vux 管理全域 User 、圖表資料，使 component 能更靈活的取得父級資訊',
            '後端框架：Laravel',
            'UI：AntD Vue',
            '圖表：Highcharts',
          ],
        },
        {
          title: 'Canvas Shoot Game',
          imgUrl: require('../assets/works/canvas-game-2.png'),
          href: 'https://metyc.github.io/',
          content: ['根據設計稿完成切版', '使用 Canvas 呈現動畫', '使用 JavaScript、TweenLite 開發功能'],
        },
        // {
        //   title: '夢想家 Blog',
        //   imgUrl:
        //     'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/blog.png?alt=media&token=22a92f96-5b8b-45df-8e68-7912b1051fcc',
        //   href: 'https://limitless-wildwood-49993.herokuapp.com/',
        //   content: [
        //     '使用 node.js、express 開發的後端 Blog',
        //     '使用 EJS 樣板渲染前端網頁',
        //     '使用 Bootstrap4 製作 RWD 網頁',
        //     '整合 Firebase 完成會員功能、留言板功能',
        //     '擁有可編輯上傳文章的後台 dashboard (如需後台帳密可洽詢本人)',
        //     '開啟網頁時 Heroku 需喚醒請耐心等待一會',
        //   ],
        // },
        // {
        //   title: 'Unsplash API 圖片牆',
        //   imgUrl:
        //     'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/image-wall.png?alt=media&token=2d34037e-40f3-457b-bf11-8f1f45674aca',
        //   href: 'https://livepower0815.github.io/react-image-wall/build/',
        //   content: ['使用 React 框架開發', '搭配 Unsplash API 撰寫圖片搜尋應用'],
        // },
        // {
        //   title: 'Youtube API 影片搜尋',
        //   imgUrl:
        //     'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/video.png?alt=media&token=f54a3550-478e-4f87-b3a0-f12f2d028038',
        //   href: 'https://livepower0815.github.io/React-youtube-API/build/',
        //   content: ['使用 React 框架開發', '搭配 Youtube API 撰寫影片搜尋應用'],
        // },
        // {
        //   title: 'CSS 貪食蛇',
        //   imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/snake.png?alt=media&token=7da4da70-1795-42bb-9b27-5274e529bece',
        //   href: 'https://livepower0815.github.io/test1/snakeGame/',
        //   content: [
        //     '單純使用 JavaScript 及 CSS 撰寫，全部邏輯不參考網路自行構想',
        //     '電腦平板手機皆可使用點擊操作',
        //   ],
        // },
        // {
        //   title: '戰船遊戲',
        //   imgUrl:
        //     'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/ship.png?alt=media&token=9e8f65a7-deb1-4b13-a69e-9c766fb044c6',
        //   href: 'https://livepower0815.github.io/test1/hexSchool/the%20first%20days/battleShip.html',
        //   content: [
        //     'JavaScript 深入淺出 練習作品',
        //     '紅心代表擊中 黑心代表MISS',
        //     '環境設定: 紅心條 數量:3 , 長度:3 位置採用隨機生成',
        //   ],
        // },
      ],
    };
  },
  computed: {
    contactShow() {
      const vm = this;
      if (vm.viewprotH > vm.navLinksH.contact - vm.windowH / 3) {
        return true;
      } else {
        return false;
      }
    },
    aboutShow() {
      const vm = this;
      if (vm.viewprotH > vm.navLinksH.about - vm.windowH / 4) {
        return true;
      } else {
        return false;
      }
    },
    bgImgScroll() {
      const vm = this;
      let mdBG = 0 + 'px ' + vm.viewprotH / 2 + 'px';
      let smBG = 'center center';
      if (vm.viewprotW < 768) {
        return smBG;
      } else {
        return mdBG;
      }
    },
    contactScroll() {
      const vm = this;
      let mdBG = 0 + 'px ' + (vm.viewprotH - vm.navLinksH.contact) + 'px';
      let smBG = 'center center';
      if (vm.viewprotW < 768) {
        return smBG;
      } else {
        return mdBG;
      }
    },
    navActive() {
      const vm = this;
      let acitve = '';
      if (vm.viewprotH + 5 > vm.navLinksH.contact) {
        acitve = 'contact';
      } else if (vm.viewprotH + 5 > vm.navLinksH.experience) {
        acitve = 'experience';
      } else if (vm.viewprotH + 5 > vm.navLinksH.works) {
        acitve = 'works';
      } else if (vm.viewprotH + 5 > vm.navLinksH.skill) {
        acitve = 'skill';
      } else if (vm.viewprotH + 5 > vm.navLinksH.about) {
        acitve = 'about';
      } else {
        acitve = '';
      }
      return acitve;
    },
  },
  methods: {
    openModal(item) {
      const vm = this;
      vm.works_modal = item;
      $('#worksModal').modal('show');
    },
  },
  mounted() {
    const vm = this;
    const about = document.querySelector('#about');
    const skill = document.querySelector('#skill');
    const works = document.querySelector('#works');
    const experience = document.querySelector('#experience');
    const contact = document.querySelector('#contact');
    vm.viewprotW = window.outerWidth;
    vm.windowH = window.outerHeight;

    //紀錄視窗寬度
    window.addEventListener('resize', function() {
      vm.viewprotW = window.outerWidth;
      vm.windowH = window.outerHeight;
    });

    //紀錄視窗跟元件滾動位置
    window.addEventListener('scroll', function() {
      vm.viewprotH = window.pageYOffset;
      vm.navLinksH.about = about.offsetTop;
      vm.navLinksH.skill = skill.offsetTop;
      vm.navLinksH.works = works.offsetTop;
      vm.navLinksH.experience = experience.offsetTop;
      vm.navLinksH.contact = contact.offsetTop;
    });

    // header 內容淡入動畫
    setTimeout(() => {
      document.querySelector('.titleHide').classList.add('active');
    }, 2500);
    setTimeout(() => {
      document.querySelector('.imgHide').classList.add('active');
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: rgb(251, 251, 251);
  margin: auto;
  position: absolute;
  background: rgb(24, 190, 196);
  border-radius: 5px;
  display: inline-block;
  margin-top: 50%;
  opacity: 0;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 10;
  transform: translate(30px, 0px);
}

body {
  font-family: 'Noto Sans TC', sans-serif;
}

.text_effect {
  text-shadow: 3px 3px 6px #000000;
}

.bg-img1 {
  background-image: url('../assets/top.jpg');
  /* background-image: url(""); */
  background-size: cover;
  background-position: center center;
  z-index: -1000;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  filter: blur(3px);
}

.bg-img2 {
  background-image: url('../assets/contact.jpeg');
  /* background-image: url(""); */
  background-size: cover;
  background-position: center center;
  z-index: -1000;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  filter: blur(3px);
}

.h300 {
  height: 300vh;
}

.h50 {
  height: 50vh;
}

.h100 {
  min-height: 100vh;
}

.titleHide,
.imgHide,
.aboutHide,
.contact_card {
  opacity: 0;
  transform: translate(0, -30px);
  transition: all 1s;
}

.contact_card a {
  padding: 0 10px;
}

.titleHide.active,
.imgHide.active,
.aboutHide.active,
.contact_card.active {
  opacity: 1;
  transform: translate(0, 0);
}

.titleHide {
  border-radius: 10px;
  padding: 20px;
}

.titleHide h1 {
  letter-spacing: 2px;
}

.myNav {
  // background: rgb(37, 43, 66);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s;
}

.myNav.scroll-color {
  background: rgba(37, 43, 66, 0.801);
}

.myNav a {
  color: rgb(253, 253, 253);
  transition: color 0.3s;
}

.myNav a:hover {
  color: rgb(71, 227, 255);
}

.myNav a.active {
  color: rgb(71, 227, 255);
  border-bottom: rgb(71, 227, 255) 3px solid;
}

.myShadow {
  box-shadow: 10px 12px 18px 0 rgba(0, 0, 0, 0.438), -10px 12px 18px 0 rgba(0, 0, 0, 0.411);
}

.myTitle-blue {
  text-align: center;
  color: rgb(37, 43, 66);
  border-bottom: 3px solid rgb(37, 43, 66);
  padding: 30px 0;
  margin-bottom: 60px;
  position: relative;
  letter-spacing: 2px;
}

.myTitle-blue::before {
  position: absolute;
  left: 50%;
  bottom: 0;
  content: '';
  height: 15px;
  width: 15px;
  background: rgb(21, 157, 167);
  transform: rotate(45deg) translate(0, 13px);
}

.myTitle-white {
  text-align: center;
  color: rgb(255, 255, 255);
  border-bottom: 3px solid rgb(255, 255, 255);
  padding: 30px 0;
  margin-bottom: 60px;
  position: relative;
  letter-spacing: 2px;
  text-shadow: 3px 3px 6px #000000;
}

.myTitle-white::before {
  position: absolute;
  left: 50%;
  bottom: 0;
  content: '';
  height: 15px;
  width: 15px;
  background: rgb(71, 141, 189);
  transform: rotate(45deg) translate(0, 13px);
}

.transform_3d {
  perspective: 1000px;
  padding: 40px 10px;
}

.myCard {
  margin: 0 15px;
  box-shadow: 0px 16px 14px 2px rgba(0, 0, 0, 0.438);
  transition: all 0.4s;
  transform-style: preserve-3d;
  transform: rotatex(30deg);
}

.myCard:hover {
  transform: scale(1.1, 1.1);
}

.myCard_content {
  color: white;
  background: rgba(37, 43, 66, 0.835);
}

.bgWhite {
  background: rgba(129, 129, 129, 0.568);
  border-radius: 10px;
  color: white;
  text-shadow: 3px 3px 6px #000000;
}

.img-profile {
  height: 400px;
  width: 400px;
  background-image: url('https://fakeimg.pl/400x400/?text=Hello');
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  border: rgb(255, 255, 255) 10px solid;
}

@media (max-width: 800px) {
  .img-profile {
    height: 300px;
    width: 300px;
  }
}

.goToWeb {
  border: white 2px solid;
  color: rgb(255, 255, 255);
  padding: 15px;
  font-size: 20px;
  transition: all 0.5s;
}

.goToWeb-noDemo {
  border: white 2px solid;
  color: rgb(0, 0, 0);
  padding: 15px;
  font-size: 20px;
  transition: all 0.5s;
}

.goToWeb:hover {
  text-decoration: none;
  background: rgb(236, 236, 236);
  color: #000;
}

.flip-card {
  margin: 20px 0;
  background-color: transparent;
  width: 200px;
  height: 200px;
  perspective: 1000px;
  /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  color: black;
}

/* Style the back side */
.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}

#about {
  padding-top: 60px;
  background: rgb(245, 245, 245);
  padding-bottom: 180px;
  background-image: url('../assets/aboutBg.png');
  background-size: 50%;
  background-position: center center;
  background-color: rgb(17, 174, 189);
}

#skill {
  padding-top: 60px;
  padding-bottom: 100px;
  background: rgb(37, 43, 66);
  background-image: linear-gradient(to bottom, rgb(37, 37, 37), rgb(39, 47, 83), rgb(39, 47, 83), rgb(37, 37, 37));
}

.skillList h3 {
  padding: 20px 0 10px 0;
}

.skillList li {
  padding: 5px;
  font-size: 18px;
}

#works {
  padding-top: 60px;
  background-image: url('../assets/projects.jpeg');
  background-position: center center;
  background-size: cover;
  padding-bottom: 130px;
}

#works h3 {
  color: rgb(37, 43, 66);
}

#experience {
  padding-top: 60px;
  background-image: linear-gradient(to right, rgb(37, 37, 37), rgb(39, 47, 83), rgb(39, 47, 83), rgb(37, 37, 37));
  padding-bottom: 100px;
}

.exInner {
  width: 64px;
}

.exImg {
  position: absolute;
  background-image: linear-gradient(to bottom, rgb(24, 178, 192), rgb(71, 141, 189));
  border-radius: 50%;
  padding: 8px;
  z-index: 1;
  transition: all 0.5s;
}

.row:hover .exImg {
  transform: scale(1.3, 1.3);
}

#experience .row h4 {
  transition: all 0.5s;
}

#experience .row:hover h4 {
  color: rgb(68, 189, 219);
}

.exLine {
  position: absolute;
  width: 20px;
  height: 100%;
  left: 50%;
  transform: translate(-50%, 5%);
  background-image: linear-gradient(
    to bottom,
    rgb(71, 141, 189),
    rgb(71, 141, 189),
    rgb(24, 178, 192),
    rgb(24, 178, 192)
  );
  z-index: 0;
}

.exContent {
  padding: 20px 15px;
}

.exCert {
  transition: all 0.3s;
}

.exCert:hover {
  box-shadow: 0px 0px 18px 5px #fdfdfd;
}

#contact {
  padding-top: 120px;
  padding-bottom: 130px;
}

.contact_card {
  background-image: linear-gradient(to bottom right, rgb(0, 79, 153), rgb(0, 149, 155));
  padding: 30px 0;
  border-radius: 20px;
  font-size: 40px;
}

.contact_card a {
  color: white;
  transition: all 0.4s;
}

.contact_card a:hover {
  color: rgb(21, 252, 232);
}

#footer {
  background: rgb(37, 43, 66);
  height: 20vh;
  position: relative;
}

#footer p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
