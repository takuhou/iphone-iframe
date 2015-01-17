(function(){

	"use strict";

	// iframe要素作成
	var _iframe = document.createElement('iframe');
	_iframe.style.width = "100%";
	_iframe.style.fontSize = "10px";
	_iframe.frameBorder = "0";

	var desc = "GitHub（ギットハブ）はソフトウェア開発プロジェクトのための共有ウェブサービスであり、Gitバージョン管理システムを使用する。"
		+ "Ruby on RailsおよびErlangで記述されており、GitHub社によって保守されている。"
		+ "主な開発者はChris Wanstrath、PJ Hyett、Tom Preston-Wernerである。"
		+ "GitHub商用プランおよびオープンソースプロジェクト向けの無料アカウントを提供している。"
		+ "2009年のユーザー調査によると、GitHubは最もポピュラーなGitホスティングサイトとなった。";

	_iframe.src = "data:text/html;charset=utf-8," + desc;

	// 追加する要素取得
	var _iframeNoScroll = document.getElementById('iframe-no-scroll');

	_iframeNoScroll.appendChild(_iframe);

})();