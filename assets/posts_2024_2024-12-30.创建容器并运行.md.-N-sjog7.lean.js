import{_ as s,c as n,a0 as p,o as e}from"./chunks/framework.RVVD-68g.js";const m=JSON.parse('{"title":"启动docker容器","description":null,"frontmatter":{"date":"2024-12-30T00:00:00.000Z","title":"启动docker容器","category":"docker","tags":["docker","Portainer","docker-compose"],"description":null},"headers":[],"relativePath":"posts/2024/2024-12-30.创建容器并运行.md","filePath":"posts/2024/2024-12-30.创建容器并运行.md"}'),l={name:"posts/2024/2024-12-30.创建容器并运行.md"};function i(t,a,o,r,c,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="部署portainer服务器" tabindex="-1">部署Portainer服务器 <a class="header-anchor" href="#部署portainer服务器" aria-label="Permalink to &quot;部署Portainer服务器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>管理员名称密码：admin admin123456</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker volume create portainer_data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run： 创建一个容器</span></span>
<span class="line"><span>-d：后台运行容器，并返回容器 ID；</span></span>
<span class="line"><span>-p 9000:9000：指定端口映射，格式为：主机(宿主)端口：容器端口</span></span>
<span class="line"><span>-v /var/run/docker.sock:/var/run/docker.sock： 绑定一个文件或目录到容器，格式为：主机(宿主)文件：容器文件</span></span>
<span class="line"><span>-v portainer_data:/data：数据持久化</span></span></code></pre></div><h2 id="docker-compose部署方式" tabindex="-1">Docker Compose部署方式 <a class="header-anchor" href="#docker-compose部署方式" aria-label="Permalink to &quot;Docker Compose部署方式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#用于部署运行所依赖的服务</span></span>
<span class="line"><span>version: &#39;3.9&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  # 基础环境组件</span></span>
<span class="line"><span>  # 1.Portainer</span></span>
<span class="line"><span>  portainer:</span></span>
<span class="line"><span>    image: portainer/portainer-ce</span></span>
<span class="line"><span>    container_name: portainer</span></span>
<span class="line"><span>    command: -H unix:///var/run/docker.sock</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    deploy:</span></span>
<span class="line"><span>      resources:</span></span>
<span class="line"><span>        limits:</span></span>
<span class="line"><span>          cpus: &#39;0.50&#39;</span></span>
<span class="line"><span>          memory: 800M</span></span>
<span class="line"><span>        reservations:</span></span>
<span class="line"><span>          cpus: &#39;0.1&#39;</span></span>
<span class="line"><span>          memory: 256M</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;9999:9000&quot;</span></span>
<span class="line"><span>      - &quot;8000:8000&quot;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /var/run/docker.sock:/var/run/docker.sock #数据文件挂载</span></span>
<span class="line"><span>      - portainer_data:/data portainer/portainer-ce #配置文件挂载</span></span>
<span class="line"><span>      - /etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span>      - /etc/timezone/timezone:/etc/timezone:ro</span></span>
<span class="line"><span># 存储卷</span></span>
<span class="line"><span>volumes:</span></span>
<span class="line"><span>  portainer_data:</span></span></code></pre></div><p>docker-compose up -d</p><p><strong>检查端口冲突</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 检查端口冲突</span></span>
<span class="line"><span>netstat -tuln | grep 9000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止运行中的Portainer容器</span></span>
<span class="line"><span>docker stop &lt;container_id&gt;</span></span>
<span class="line"><span># 删除Portainer容器（注意：这将删除该容器中的所有数据）</span></span>
<span class="line"><span>docker rm &lt;container_id&gt;</span></span>
<span class="line"><span># 重新运行Portainer容器，并将端口映射到8000端口</span></span>
<span class="line"><span>docker run -d -p 8000:9000 --name portainer portainer/portainer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>docker ps -a | grep portainer</span></span>
<span class="line"><span></span></span>
<span class="line"><span># </span></span>
<span class="line"><span>docker logs &lt;container_id&gt;</span></span></code></pre></div><h1 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h1><ul><li>[ ] Error response from daemon: cannot stop container: 27d8c7f096ca: permission denied</li></ul>`,10)]))}const k=s(l,[["render",i]]);export{m as __pageData,k as default};
