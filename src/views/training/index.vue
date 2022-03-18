<template>
    <div>
        <div id="map" class="map" ref="mapElement"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import 'ol/ol.css';
import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import View from 'ol/View';
import { getCenter } from 'ol/extent';

export default defineComponent({
  setup() {
    const mapElement = ref<Element>();
    const extent = [0, 0, 1024, 968];
    const projection = new Projection({
      code: 'xkcd-image',
      units: 'pixels',
      extent,
    });
    const layers = new ImageLayer({
      source: new Static({
        attributions: '© <a href="https://xkcd.com/license.html">xkcd</a>',
        url: 'https://imgs.xkcd.com/comics/online_communities.png',
        projection,
        imageExtent: extent,
      }),
    });
    const view = new View({
      projection,
      center: getCenter(extent),
      zoom: 2,
      maxZoom: 8,
    });
    const createMapView = (projection: any, imageExtend: []) => {};
    const getMinimumZoom = () => {
      //   In openlayers, the image will be projected into 256x256 pixels,
      //   and image will be 2x larger at each zoom level.
      //   https://openlayers.org/en/latest/examples/min-zoom.html
      //   const containerAspectRatio = mapElement
      //     ? mapElement.clientHeight / mapElement.clientWidth
      //     : 1;
      //   const imageAspectRatio = props.imageHeight / props.imageWidth;
      //   if (imageAspectRatio > containerAspectRatio) {
      //     // Fit to width
      //     return Math.LOG2E * Math.log(mapElement.clientHeight / 256);
      //   } else {
      //     // Fit to height
      //     return Math.LOG2E * Math.log(mapElement.clientWidth / 256);
      //   }
    };
    onMounted(() => {
      new Map({
        layers: [layers],
        target: 'map',
        view,
      });
      console.log(mapElement);
    });
    return { mapElement };
  },
});
</script>

<style lang='less' scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>