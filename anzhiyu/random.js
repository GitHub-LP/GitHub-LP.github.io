var posts=["2021/08/07/adobe系列错误代码解决方案汇总/","2022/11/30/bgp课后/","2021/08/22/cmd命令大全/","2021/11/03/c语言程序设计复习题（2021年11月3日）/","2021/08/05/c语言程序设计基础/","2024/01/04/hello-world/","2022/04/02/linux七大项目作业-dhcp/","2022/04/03/linux七大项目作业-httpd/","2022/04/03/linux七大项目作业-dns/","2022/04/03/linux七大项目作业-samba/","2022/04/02/linux七大项目作业-服务与进程管理/","2022/03/31/linux七大项目作业-网络服务/","2022/04/02/linux七大项目作业-软件包管理/","2022/04/03/linux七大项目作业详细步骤/","2022/03/31/linux基础命令/","2021/08/07/markdown的基本语法知识/","2023/05/24/owasp-top-10/","2023/06/01/phpstudy2018-mysql启动失败问题/","2022/05/07/steam/","2023/06/03/steam服务出错，您电脑上的steam服务需要维护/","2023/09/12/win10系统优化与防范策略/","2023/06/06/vscode-msys2配置c-c环境/","2023/05/17/win10查看端口，并杀死进程/","2023/05/22/windows-10-主机上的-vmware-workstation-和设备-凭据防护不兼容错误/","2021/10/24/zoomit使用技巧/","2023/06/03/【六一特别文章】python编写一个六一儿童节问答小游/","2023/09/19/关于Kali部署OneForAll，不能运行问题/","2021/08/22/大表哥画质推荐/","2023/05/31/护网蓝队（初级）/","2021/08/18/机动战士高达观影顺序/","2023/05/25/渗透测试面试问题合集/","2022/11/21/电脑各修改项【自用】/","2021/11/12/第五章-web应用常见漏洞原理与防范/","2021/11/12/第六章-计算机病毒/","2021/11/12/第四章-网络攻击与防范（一）/","2021/11/12/第四章-网络攻击与防范（二）/","2021/11/12/第四章-网络攻击与防范（三）/","2021/09/25/网络安全技术-第三章-操作系统安全（一）/","2021/09/25/网络安全技术-第一章-网络安全概述（一）/","2021/09/25/网络安全技术-第一章-网络安全概述（二）/","2021/10/18/网络安全技术-第三章-操作系统安全（七）/","2021/10/17/网络安全技术-第三章-操作系统安全（三）/","2021/10/19/网络安全技术-第三章-操作系统安全（九）/","2021/10/18/网络安全技术-第三章-操作系统安全（八）/","2021/10/17/网络安全技术-第三章-操作系统安全（二）/","2021/10/17/网络安全技术-第三章-操作系统安全（五）/","2021/10/18/网络安全技术-第三章-操作系统安全（六）/","2021/10/17/网络安全技术-第三章-操作系统安全（四）/","2021/09/25/网络安全技术-第二章-数据加密与pki技术（一）/","2021/09/25/网络安全技术-第二章-数据加密与pki技术（三）/","2021/09/25/网络安全技术-第二章-数据加密与pki技术（二）/","2023/03/02/罗技驱动logitech-g-hub一直卡在初始加载界面无法进入的问/","2022/12/12/高级路由期末命令配置/","2023/08/25/逃出verifier-无限蓝屏/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"AiENG_07","link":"https://blog.csdn.net/qq_30163677","avatar":"https://profile-avatar.csdnimg.cn/630368f98585487099c178c3083b1ed2_qq_30163677.jpg","descr":"某知名啥也不是博主 干啥啥不行 吃饭第一名 发呆业务爱好者生活明朗，万物可爱","siteshot":"https://raw.githubusercontent.com/GitHub-LP/img/main/img/img_csdn_photo.png","color":"vip","tag":"CSDN"},{"name":"AiENG","link":"https://github.com/GitHub-LP","avatar":"https://raw.githubusercontent.com/GitHub-LP/img/main/all/123.jpg","descr":"这是我的博客快来看看哦","siteshot":"https://raw.githubusercontent.com/GitHub-LP/img/main/img/img_csdn_photo.png","color":"vip","tag":"Blog"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"CSDN-AiENG_07","link":"https://blog.csdn.net/qq_30163677","avatar":"https://profile-avatar.csdnimg.cn/630368f98585487099c178c3083b1ed2_qq_30163677.jpg!1","descr":"某知名啥也不是博主 干啥啥不行 吃饭第一名 发呆业务爱好者","recommend":true},{"name":"AiENG","link":"https://github-lp.github.io/","avatar":"https://raw.githubusercontent.com/GitHub-LP/img/main/all/123.jpg","descr":"myblog","recommend":true},{"name":"GitHub-LP","link":"https://github.com/GitHub-LP","avatar":"https://raw.githubusercontent.com/GitHub-LP/img/main/all/123.jpg","descr":"GitHub-LP","recommend":true},{"name":"blog-AiENG","link":"https://github-lp.github.io/blog/","avatar":"https://raw.githubusercontent.com/GitHub-LP/img/main/all/123.jpg","descr":"myblog-github/blog","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };