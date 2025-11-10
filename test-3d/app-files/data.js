var APP_DATA = {
  "scenes": [
    {
      "id": "0-field",
      "name": "Field",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 980,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.588265331661063,
          "pitch": -0.5970533011619032,
          "rotation": 0,
          "target": "1-city"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-city",
      "name": "City",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 980,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.676146694291276,
          "pitch": 0.16425784428154344,
          "rotation": 0,
          "target": "0-field"
        },
        {
          "yaw": 0.3360896959146942,
          "pitch": 0.4216559705814227,
          "rotation": 0,
          "target": "2-street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-street",
      "name": "Street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 256,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Test 3D",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
