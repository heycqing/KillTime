<div class="index-flyme-center" id="index-flyme-center"></div>


<script type='text/html' id='FlymeFloor'>
	<div class="section-box section-Flyme-box">
		<div class="section-title">
			<h3>Flyme</h3>
		</div>
		<div class="section-box-row">
			<div class="index-center-wrapper">
				<ul class="clearfix">
					{{each data.FlymeFloor.data as item index}}
					{{if index === 0}}<li class="first">{{ else }}<li>{{ /if }}
						<div class="section-item-box goods-box" >
							<a class="box-img box-img-retina" target='_blank'  data-mtype="store_index_floor_7_{{ index + 1 }}" data-bh='click_store_index_floor_7_{{ index + 1 }}' href="{{item.href}}"  >
								<div class="comment-img-wp">
									<i></i>
									<img class="goods-img lazy-img" data-img="{{ item.img }}" data-retina="{{ item.img }} 1x,{{ item.img }} 2x"/>
								</div>
								<p>{{ item.title }}</p>
							</a>
						</div>
					</li>
					{{/each}}
				</ul>
			</div>
		</div>
  </div>
</script>