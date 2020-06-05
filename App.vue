<script>
export default {
	onLaunch: function() {
		console.log('App Launch');

		setTimeout(() => {
			// uni.setTabBarBadge({
			// 	index: 1,
			// 	text: '36w'
			// });
			// uni.showTabBarRedDot({
			// 	index: 0
			// });
		}, 1000);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */ 
@import url("./static/styles/global.css");
page{
	height:100%;
	color:#414141
}
</style>
