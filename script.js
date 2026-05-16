const AOTAI_DATA = {
    keyPoints: [
        { id: 1, name: '塘口村', lat: 34.0230, lng: 107.4380, alt: 1740, type: 'start', day: 1, desc: '鳌太穿越传统起点，太白县境内小村庄，海拔1740米。村口设有禁止穿越警示牌和执勤板房，进山口加装铁丝网。' },
        { id: 2, name: '2900营地', lat: 34.0285, lng: 107.4480, alt: 2900, type: 'camp', day: 1, desc: '鳌山攀登途中的第一个营地，位于林线以上，视野开阔。从塘口村至此需爬升约1160米，坡度陡峭。' },
        { id: 3, name: '鳌山大梁', lat: 34.0325, lng: 107.4580, alt: 3200, type: 'waypoint', day: 1, desc: '鳌山主脊线，视野豁然开朗，石海开始出现。从此处开始进入无人区，无任何补给和信号。' },
        { id: 4, name: '导航架', lat: 34.0355, lng: 107.4650, alt: 3400, type: 'waypoint', day: 1, desc: '鳌山顶部的金属导航架，是鳌山的重要地标。此处风极大，是判断方位的关键参照物。' },
        { id: 5, name: '鳌山标志塔', lat: 34.0375, lng: 107.4700, alt: 3476, type: 'peak', day: 1, desc: '鳌山顶峰，秦岭第二高峰，又称西太白。海拔3476米，是鳌太线西端最高点。从此处可俯瞰秦岭群峰。' },
        { id: 6, name: '药王洞', lat: 34.0395, lng: 107.4800, alt: 3350, type: 'camp', day: 1, desc: '鳌山下山途中的天然石洞，可避风休息。附近有季节性水源，是第一天常见的扎营地。' },
        { id: 7, name: '麦秸岭', lat: 34.0410, lng: 107.4930, alt: 3420, type: 'waypoint', day: 2, desc: '以大量枯黄麦秸状高山草命名，刃脊横切路段开始。两侧断崖，最窄处仅容一人通过，需极度小心。' },
        { id: 8, name: '水窝子营地', lat: 34.0425, lng: 107.5050, alt: 3250, type: 'camp', day: 2, desc: '鳌太线上重要的水源地和营地，有稳定泉水。在缺水的鳌太线上，此处水源极为珍贵。' },
        { id: 9, name: '飞机梁', lat: 34.0435, lng: 107.5180, alt: 3380, type: 'danger', day: 2, desc: '因山脊形似飞机机翼而得名，是鳌太线最危险的刃脊路段之一。两侧悬崖，风力极大，失温事故高发区。' },
        { id: 10, name: '2800营地', lat: 34.0445, lng: 107.5300, alt: 2800, type: 'camp', day: 2, desc: '海拔较低的重要营地，可补充水源。从飞机梁下降至此，是难得的休息点。' },
        { id: 11, name: '金字塔', lat: 34.0455, lng: 107.5430, alt: 3450, type: 'waypoint', day: 3, desc: '因山体形似金字塔而得名，石海遍布，路迹不清。需仔细辨认方向，浓雾中极易迷路。' },
        { id: 12, name: '西塬', lat: 34.0465, lng: 107.5560, alt: 3360, type: 'waypoint', day: 3, desc: '太白梁西侧垭口，是鳌太线中段的重要节点。从此处可远望太白梁，是心理和体力的双重考验。' },
        { id: 13, name: '太白梁', lat: 34.0485, lng: 107.5690, alt: 3523, type: 'peak', day: 3, desc: '秦岭第二高峰（部分资料记为3523米），是鳌太线中段的最高点。石海茫茫，风大雾浓，是事故多发地段。' },
        { id: 14, name: '东塬', lat: 34.0500, lng: 107.5820, alt: 3280, type: 'camp', day: 3, desc: '太白梁东侧营地，有季节性水源。翻越太白梁后的重要休整点，许多队伍在此过夜。' },
        { id: 15, name: '万仙阵', lat: 34.0520, lng: 107.5950, alt: 3480, type: 'danger', day: 4, desc: '巨石阵般的石海区域，巨石嶙峋如万仙列阵。路迹模糊，方向难辨，浓雾中极易迷失。' },
        { id: 16, name: '雷公庙', lat: 34.0530, lng: 107.6080, alt: 3350, type: 'waypoint', day: 4, desc: '废弃庙宇遗址，仅存残垣断壁。是跑马梁段的重要地标，也是判断方位的关键节点。' },
        { id: 17, name: '东跑马梁', lat: 34.0550, lng: 107.6250, alt: 3525, type: 'waypoint', day: 4, desc: '近百万亩高山草甸，看似平坦实则危机四伏。无任何遮挡，雷暴天气时极度危险。全程最暴露路段。' },
        { id: 18, name: '跑马梁中段', lat: 34.0400, lng: 107.6600, alt: 3450, type: 'danger', day: 5, desc: '跑马梁中段，草甸与石海交替。此处远离山脊参照物，大雾中极易偏离主路，多起失踪事件发生在此。' },
        { id: 19, name: '大爷海南侧', lat: 34.0000, lng: 107.7200, alt: 3500, type: 'waypoint', day: 5, desc: '接近太白山核心区，植被逐渐增多。从跑马梁下降至此，开始看到高山湖泊群。' },
        { id: 20, name: '玉皇池', lat: 33.9443, lng: 107.7686, alt: 3320, type: 'waypoint', day: 5, desc: '太白山高山湖泊群之一，湖面如镜，倒映群峰。是太白山最美的景观之一，也是重要的水源补给点。' },
        { id: 21, name: '三爷海', lat: 33.9484, lng: 107.7629, alt: 3440, type: 'waypoint', day: 5, desc: '太白山三大高山湖泊之一，海拔3440米。湖水清澈，四周石海环绕，景色壮美。' },
        { id: 22, name: '二爷海', lat: 33.9525, lng: 107.7629, alt: 3590, type: 'waypoint', day: 6, desc: '太白山三大高山湖泊中海拔最高者，冰斗湖，湖面常年冰冷。是攀登拔仙台前的重要节点。' },
        { id: 23, name: '大爷海', lat: 33.9576, lng: 107.7612, alt: 3590, type: 'camp', day: 6, desc: '太白山最著名的高山冰斗湖，海拔3590米。湖畔有大爷海保护站，是鳌太线终点前最后的庇护所。' },
        { id: 24, name: '拔仙台', lat: 33.9554, lng: 107.7656, alt: 3771, type: 'end', day: 6, desc: '太白山主峰，秦岭最高点，海拔3771.2米，中国大陆东半壁最高峰。相传姜子牙在此点将封神。鳌太线终点。' }
    ],
    daySegments: {
        1: {
            title: 'Day 1 · 塘口村 → 药王洞',
            distance: '18km',
            ascent: '1730m',
            descent: '126m',
            time: '10-12h',
            difficulty: '★★★★☆',
            water: true,
            waterNote: '药王洞有季节性水源',
            danger: '爬升剧烈，坡度陡峭，体力消耗极大',
            narrative: [
                '清晨从塘口村出发，海拔1740米。村口的"禁止穿越"警示牌一块接着一块，铁丝网试图隔绝前行的路径。然而，对于执意上山的人来说，这些不过是形同虚设的障碍。',
                '从塘口村到2900营地，短短几公里海拔骤升1160米，平均坡度超过30度。密林中无路可循，只能沿山脊强行攀爬。每走一步，心脏都在胸腔里擂鼓般跳动。',
                '穿过林线后，视野豁然开朗——鳌山大梁横亘眼前，石海开始出现，风也骤然增大。导航架在雾中若隐若现，鳌山标志塔海拔3476米，是秦岭第二高峰。站在这里，东望群峰连绵，才真正理解何为"中华龙脊"。',
                '第一天便是最残酷的考验：从1740米到3476米，近1800米的垂直爬升，足以让许多人望而却步。傍晚抵达药王洞，在天然石洞中避风扎营，第一夜，山风呼啸如鬼哭。'
            ]
        },
        2: {
            title: 'Day 2 · 药王洞 → 2800营地',
            distance: '22km',
            ascent: '680m',
            descent: '830m',
            time: '11-13h',
            difficulty: '★★★★★',
            water: true,
            waterNote: '水窝子营地有稳定泉水，2800营地有水源',
            danger: '麦秸岭刃脊横切、飞机梁两侧悬崖，失温事故高发',
            narrative: [
                '第二天是鳌太线最危险的路段之一。从药王洞出发，很快进入麦秸岭刃脊横切路段——狭窄山脊最窄处仅容一人通过，一侧山体一侧悬崖，脚下碎石松动，稍有不慎便是万丈深渊。',
                '水窝子营地是鳌太线上最珍贵的水源地之一。在缺水的高海拔山脊上，这处稳定泉水如同生命线。许多穿越者在此补充水量，因为下一段路将长时间无水可寻。',
                '飞机梁，因山脊形似飞机机翼而得名。这里是鳌太线最危险的刃脊路段之一，两侧皆为断崖，风力极大。天气晴好时已令人胆寒，若遇大雾或狂风，便是生死一线之间。多起失温遇难事故发生在此。',
                '从飞机梁下降至2800营地，海拔降低近600米，终于可以喘息。但每个人的心里都清楚，真正的考验还在后面。'
            ]
        },
        3: {
            title: 'Day 3 · 2800营地 → 东塬',
            distance: '20km',
            ascent: '920m',
            descent: '640m',
            time: '10-12h',
            difficulty: '★★★★☆',
            water: false,
            waterNote: '东塬有季节性水源，需提前储备',
            danger: '金字塔石海路迹不清，太白梁风大雾浓',
            narrative: [
                '第三天翻越鳌太线中段的制高点——太白梁。从2800营地出发，先经过金字塔区域，巨石如金字塔般耸立，石海茫茫，路迹模糊。浓雾中极易迷失方向，必须依靠GPS和指南针判断方位。',
                '太白梁海拔3523米，是鳌太线中段的最高点。站在梁顶，四周石海如海浪凝固，云雾在脚下翻涌。然而美景转瞬即逝——山顶天气变幻莫测，晴空万里可在十分钟内变为暴风雪。',
                '翻越太白梁后下降至东塬营地，有季节性水源。三天的高强度穿越已让体力严重透支，但更艰难的跑马梁还在前方等待。此时，许多人开始出现高山反应：头痛、恶心、失眠。'
            ]
        },
        4: {
            title: 'Day 4 · 东塬 → 东跑马梁',
            distance: '25km',
            ascent: '570m',
            descent: '320m',
            time: '9-11h',
            difficulty: '★★★★☆',
            water: false,
            waterNote: '全程无稳定水源，需在东塬备足饮水',
            danger: '万仙阵巨石区易迷路，跑马梁全程暴露无遮挡',
            narrative: [
                '第四天进入鳌太线最诡异的路段——万仙阵。巨石嶙峋如万仙列阵，路迹几乎消失。穿越者需要在巨石间跳跃攀爬，每一步都需谨慎。大雾弥漫时，这里如同迷宫，多起失踪事件与此有关。',
                '过雷公庙废墟后，进入东跑马梁。近百万亩高山草甸铺展眼前，看似平坦温柔，实则危机四伏。全程无任何遮挡物，若遇雷暴天气，人便是草甸上最高的目标。',
                '跑马梁是鳌太线最漫长的路段，一眼望不到头的草甸让人心生绝望。体力在消耗，意志在消磨，而天气随时可能变脸。许多穿越者在这一天经历了最深的恐惧和最强烈的放弃念头。'
            ]
        },
        5: {
            title: 'Day 5 · 东跑马梁 → 玉皇池',
            distance: '24km',
            ascent: '450m',
            descent: '680m',
            time: '10-12h',
            difficulty: '★★★☆☆',
            water: true,
            waterNote: '玉皇池、三爷海有水源',
            danger: '跑马梁中段大雾易迷路，偏离主路极危险',
            narrative: [
                '第五天继续穿越跑马梁中段，这是鳌太线上最容易迷路的区域之一。草甸与石海交替出现，远离山脊参照物，大雾中极易偏离主路。多起失踪事件正是发生在此——迷路后并发症致命。',
                '当高山湖泊群终于出现在视野中时，所有人都如释重负。玉皇池湖面如镜，倒映群峰；三爷海碧波荡漾，四周石海环绕。这些冰斗湖是第四纪冰川的杰作，也是太白山最美的景观。',
                '第五天是心理转折点。从荒凉的山脊下降到湖泊区域，植被逐渐增多，水源不再匮乏。但疲劳和高原反应仍在侵蚀每个人的意志，夜晚的低温让睡眠成为一种奢侈。'
            ]
        },
        6: {
            title: 'Day 6 · 玉皇池 → 拔仙台',
            distance: '12km',
            ascent: '830m',
            descent: '650m',
            time: '6-8h',
            difficulty: '★★★☆☆',
            water: true,
            waterNote: '大爷海保护站有水源',
            danger: '最后冲刺段坡度陡，注意高反',
            narrative: [
                '最后一天，目标就在眼前——拔仙台。从玉皇池出发，经过三爷海、二爷海，每一个冰斗湖都是大自然亿万年雕琢的杰作。二爷海海拔3590米，是三大湖泊中海拔最高者。',
                '大爷海，太白山最著名的高山冰斗湖，海拔3590米。湖畔的大爷海保护站是鳌太线终点前最后的庇护所。站在这里仰望拔仙台，那座3771.2米的秦岭之巅，便是穿越的终点。',
                '从大爷海到拔仙台，最后300多米的爬升，每一步都沉重如铅。但当双脚终于站上秦岭最高点，俯瞰脚下云海翻涌、群峰臣服的那一刻，所有的疲惫、恐惧、挣扎都化作了难以言说的感动。',
                '然而，到达拔仙台并非结束——下山路同样漫长。三条下撤路线（鹦鸽、汤峪、厚畛子）各有艰险。鳌太线，从第一步到最后一步，从未给人松懈的机会。'
            ]
        }
    },
    accidents: [
        { year: 2001, lat: 34.0435, lng: 107.5180, desc: '鳌太穿越有官方记录元年', type: 'milestone' },
        { year: 2002, lat: 34.0375, lng: 107.4700, desc: '鳌山标志塔附近，驴友失温遇难', type: 'death' },
        { year: 2008, lat: 34.0485, lng: 107.5690, desc: '太白梁区域，多人遇险', type: 'rescue' },
        { year: 2012, lat: 34.0550, lng: 107.6250, desc: '东跑马梁，3人失温遇难', type: 'death' },
        { year: 2013, lat: 34.0400, lng: 107.6600, desc: '跑马梁中段，2人失踪', type: 'missing' },
        { year: 2015, lat: 34.0435, lng: 107.5180, desc: '飞机梁刃脊，1人滑坠遇难', type: 'death' },
        { year: 2016, lat: 34.0520, lng: 107.5950, desc: '万仙阵石海区，2人迷路后失温', type: 'death' },
        { year: 2017, lat: 34.0550, lng: 107.6250, desc: '跑马梁暴风雪，多人遇险3人遇难', type: 'death' },
        { year: 2018, lat: 33.9576, lng: 107.7612, desc: '禁令发布后仍有违规穿越者遇难', type: 'death' },
        { year: 2019, lat: 34.0485, lng: 107.5690, desc: '太白梁区域违规穿越者失联', type: 'missing' },
        { year: 2021, lat: 34.0400, lng: 107.6600, desc: '跑马梁区域2人遇难', type: 'death' },
        { year: 2024, lat: 34.0375, lng: 107.4700, desc: '鳌山段发现失联驴友帐篷，确认遇难', type: 'death' },
        { year: 2025, lat: 34.0550, lng: 107.6250, desc: '元旦假期5人违规穿越，3人遇难', type: 'death' }
    ],
    geoFeatures: [
        { name: '石海区', lat: 34.0455, lng: 107.5430, radius: 2000, desc: '金字塔至太白梁段，巨石遍布', color: '#f59e0b' },
        { name: '刃脊区', lat: 34.0430, lng: 107.5100, radius: 1500, desc: '飞机梁至麦秸岭段，最窄处仅容一人', color: '#ef4444' },
        { name: '跑马梁草甸', lat: 34.0480, lng: 107.6400, radius: 4000, desc: '近百万亩高山草甸，全程暴露', color: '#10b981' },
        { name: '冰斗湖群', lat: 33.9530, lng: 107.7640, radius: 1500, desc: '大爷海、二爷海、三爷海冰斗湖群', color: '#3b82f6' },
        { name: '第四纪冰川遗迹', lat: 33.9554, lng: 107.7656, radius: 3000, desc: '拔仙台周边完整冰川遗迹', color: '#8b5cf6' }
    ],
    climateZones: [
        { name: '温带季风区', lat: 34.0230, lng: 107.4380, radius: 3000, desc: '山脚地带，四季分明', color: 'rgba(39,174,96,0.15)', border: '#27ae60' },
        { name: '亚高山寒温带', lat: 34.0400, lng: 107.5300, radius: 5000, desc: '海拔2600-3200m，针叶林带', color: 'rgba(26,188,156,0.12)', border: '#1abc9c' },
        { name: '高山寒带', lat: 34.0500, lng: 107.6200, radius: 6000, desc: '海拔3200m以上，年均温-2℃', color: 'rgba(231,76,60,0.12)', border: '#e74c3c' }
    ],
    dangerZones: [
        { name: '飞机梁刃脊', lat: 34.0435, lng: 107.5180, radius: 1200, level: 'extreme', desc: '两侧悬崖，风力极大' },
        { name: '太白梁石海', lat: 34.0485, lng: 107.5690, radius: 1500, level: 'extreme', desc: '石海茫茫，风大雾浓' },
        { name: '跑马梁暴露区', lat: 34.0550, lng: 107.6250, radius: 3000, level: 'high', desc: '无遮挡，雷暴极度危险' },
        { name: '万仙阵迷路区', lat: 34.0520, lng: 107.5950, radius: 1200, level: 'high', desc: '路迹模糊，浓雾易迷路' },
        { name: '麦秸岭横切', lat: 34.0410, lng: 107.4930, radius: 800, level: 'high', desc: '刃脊横切，窄处一人通过' }
    ]
};

const TILE_URLS = {
    dark: 'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
    terrain: 'https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    terrainLabel: 'https://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
};

const TILE_ATTR = {
    dark: '© 高德地图',
    terrain: '© 高德地图',
    terrainLabel: '© 高德地图'
};

const TILE_MAXZOOM = {
    dark: 18,
    terrain: 18,
    terrainLabel: 18
};

function createTileLayer(type) {
    return L.tileLayer(TILE_URLS[type], {
        attribution: TILE_ATTR[type],
        maxZoom: TILE_MAXZOOM[type],
        subdomains: ['1','2','3','4']
    });
}

const maps = {};
const mapLayers = {};
let currentDay = 1;

function createMarkerIcon(type) {
    const configs = {
        start: { cls: 'marker-start', icon: '▶' },
        peak: { cls: 'marker-peak', icon: '▲' },
        camp: { cls: 'marker-camp', icon: '●' },
        danger: { cls: 'marker-danger', icon: '⚠' },
        end: { cls: 'marker-end', icon: '★' },
        waypoint: { cls: 'marker-waypoint', icon: '◆' }
    };
    const cfg = configs[type] || configs.waypoint;
    return L.divIcon({
        className: '',
        html: '<div class="custom-marker ' + cfg.cls + '">' + cfg.icon + '</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -16]
    });
}

function createPopupContent(point) {
    const typeLabels = {
        start: { text: '起点', cls: 'start' },
        peak: { text: '山峰', cls: 'peak' },
        camp: { text: '营地', cls: 'camp' },
        danger: { text: '危险', cls: 'danger' },
        end: { text: '终点', cls: 'end' },
        waypoint: { text: '途经点', cls: 'waypoint' }
    };
    const label = typeLabels[point.type] || typeLabels.waypoint;
    return '<div class="popup-content">' +
        '<div class="popup-title">' + point.name + '</div>' +
        '<div class="popup-alt">' + point.alt + 'm</div>' +
        '<span class="popup-type ' + label.cls + '">' + label.text + '</span>' +
        '<div class="popup-desc">' + point.desc + '</div>' +
        '<div class="popup-coords">' + point.lat.toFixed(4) + '°N, ' + point.lng.toFixed(4) + '°E</div>' +
        '</div>';
}

function getRouteCoords(points) {
    return points.map(function(p) { return [p.lat, p.lng]; });
}

function addRouteToMap(map, points, options) {
    var opts = options || {};
    var coords = getRouteCoords(points);
    var color = opts.color || '#06b6d4';
    var weight = opts.weight || 3;
    var dashArray = opts.dashArray || null;
    var glowColor = opts.glowColor !== undefined ? opts.glowColor : 'rgba(6, 182, 212, 0.3)';
    var glowWeight = opts.glowWeight || 8;
    var animate = opts.animate || false;

    if (glowColor) {
        L.polyline(coords, {
            color: glowColor,
            weight: glowWeight,
            smoothFactor: 1.5,
            lineCap: 'round',
            lineJoin: 'round'
        }).addTo(map);
    }

    var route = L.polyline(coords, {
        color: color,
        weight: weight,
        smoothFactor: 1.5,
        dashArray: dashArray,
        lineCap: 'round',
        lineJoin: 'round'
    }).addTo(map);

    if (animate) {
        var totalLength = 0;
        for (var i = 1; i < coords.length; i++) {
            totalLength += map.latLngToContainerPoint(coords[i]).distanceTo(map.latLngToContainerPoint(coords[i-1]));
        }
        route.setStyle({ dashArray: totalLength + ' ' + totalLength, dashOffset: totalLength });
        var animStep = totalLength / 60;
        function animateRoute() {
            var offset = parseFloat(route.options.dashOffset) - animStep;
            if (offset <= 0) {
                route.setStyle({ dashArray: null, dashOffset: null });
                return;
            }
            route.setStyle({ dashOffset: offset });
            requestAnimationFrame(animateRoute);
        }
        setTimeout(animateRoute, 300);
    }

    return route;
}

function addMarkersToMap(map, points, options) {
    var opts = options || {};
    var fitBounds = opts.fitBounds !== undefined ? opts.fitBounds : true;
    var markers = [];

    points.forEach(function(point) {
        var marker = L.marker([point.lat, point.lng], {
            icon: createMarkerIcon(point.type)
        }).bindPopup(createPopupContent(point), {
            maxWidth: 280,
            className: 'custom-popup'
        }).bindTooltip(point.name + ' (' + point.alt + 'm)', {
            direction: 'top',
            offset: [0, -16],
            className: 'map-tooltip'
        });

        marker.on('mouseover', function() {
            this.openPopup();
        });

        marker.addTo(map);
        markers.push(marker);
    });

    if (fitBounds && points.length > 0) {
        var bounds = L.latLngBounds(points.map(function(p) { return [p.lat, p.lng]; }));
        map.fitBounds(bounds, { padding: [40, 40] });
    }

    return markers;
}

function initOverviewMap() {
    var map = L.map('map-overview', {
        center: [34.040, 107.600],
        zoom: 11,
        zoomControl: true,
        attributionControl: false
    });

    var darkLayer = createTileLayer('dark');
    var terrainLayer = createTileLayer('terrain');
    var dangerLayer = L.layerGroup();

    darkLayer.addTo(map);

    mapLayers.overview = {
        dark: darkLayer,
        terrain: terrainLayer,
        danger: dangerLayer,
        currentBase: 'dark'
    };

    var allPoints = AOTAI_DATA.keyPoints;
    addRouteToMap(map, allPoints, { color: '#06b6d4', weight: 3.5, glowColor: 'rgba(6, 182, 212, 0.25)', glowWeight: 10, animate: true });
    addMarkersToMap(map, allPoints, { fitBounds: true });

    AOTAI_DATA.dangerZones.forEach(function(zone) {
        var color = zone.level === 'extreme' ? '#ef4444' : '#f59e0b';
        var fillColor = zone.level === 'extreme' ? 'rgba(239,68,68,0.1)' : 'rgba(245,158,11,0.08)';
        L.circle([zone.lat, zone.lng], {
            radius: zone.radius,
            color: color,
            fillColor: fillColor,
            fillOpacity: 0.6,
            weight: 1.5,
            dashArray: '6 4'
        }).bindPopup(
            '<div class="popup-content">' +
            '<div class="popup-title" style="color:' + color + '">' + zone.name + '</div>' +
            '<span class="popup-type danger">' + (zone.level === 'extreme' ? '极危险' : '高危险') + '</span>' +
            '<div class="popup-desc">' + zone.desc + '</div>' +
            '</div>'
        ).bindTooltip(zone.name, { className: 'map-tooltip' }).addTo(mapLayers.overview.danger);
    });

    var dayColors = ['#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
    for (var d = 1; d <= 6; d++) {
        var dayPts = allPoints.filter(function(p) { return p.day === d; });
        if (dayPts.length > 1) {
            addRouteToMap(map, dayPts, {
                color: dayColors[d-1],
                weight: 2,
                glowColor: null,
                dashArray: '4 6'
            });
        }
    }

    L.marker([34.0230, 107.4380], {
        icon: L.divIcon({
            className: '',
            html: '<div class="route-label route-label-start">起点</div>',
            iconSize: [50, 24],
            iconAnchor: [25, -8]
        })
    }).addTo(map);

    L.marker([33.9554, 107.7656], {
        icon: L.divIcon({
            className: '',
            html: '<div class="route-label route-label-end">终点</div>',
            iconSize: [50, 24],
            iconAnchor: [25, -8]
        })
    }).addTo(map);

    maps.overview = map;
}

function initDayMap() {
    var map = L.map('map-day', {
        center: [34.040, 107.560],
        zoom: 12,
        zoomControl: true,
        attributionControl: false
    });

    var darkLayer = createTileLayer('dark');
    var terrainLayer = createTileLayer('terrain');
    darkLayer.addTo(map);

    mapLayers.day = {
        dark: darkLayer,
        terrain: terrainLayer,
        currentBase: 'dark',
        route: null,
        markers: [],
        fullRoute: null,
        activeSegment: null
    };

    var allPoints = AOTAI_DATA.keyPoints;
    addRouteToMap(map, allPoints, { color: 'rgba(100,116,139,0.3)', weight: 2, glowColor: null });
    mapLayers.day.fullRoute = true;

    updateDayMap(1);

    maps.day = map;
}

function updateDayMap(day) {
    var map = maps.day;
    if (!map) return;

    if (mapLayers.day.activeSegment) {
        map.removeLayer(mapLayers.day.activeSegment);
    }
    mapLayers.day.markers.forEach(function(m) { map.removeLayer(m); });
    mapLayers.day.markers = [];

    var dayPoints = AOTAI_DATA.keyPoints.filter(function(p) { return p.day === day; });

    mapLayers.day.activeSegment = addRouteToMap(map, dayPoints, {
        color: '#06b6d4',
        weight: 4,
        glowColor: 'rgba(6, 182, 212, 0.3)',
        glowWeight: 10
    });

    var newMarkers = addMarkersToMap(map, dayPoints, { fitBounds: true });
    mapLayers.day.markers = newMarkers;

    var dayData = AOTAI_DATA.daySegments[day];
    var detailEl = document.getElementById('dayDetail');
    if (detailEl && dayData) {
        var narrativeHtml = '';
        dayData.narrative.forEach(function(p) {
            narrativeHtml += '<p>' + p + '</p>';
        });
        detailEl.innerHTML =
            '<div class="day-header">' +
                '<span class="day-number">Day ' + day + '</span>' +
                '<span class="day-route">' + (dayData.title.split('·')[1] || '').trim() + '</span>' +
            '</div>' +
            '<div class="day-stats">' +
                '<div class="ds-item"><div class="ds-val">' + dayData.distance + '</div><div class="ds-label">距离</div></div>' +
                '<div class="ds-item"><div class="ds-val">' + dayData.ascent + '</div><div class="ds-label">爬升</div></div>' +
                '<div class="ds-item"><div class="ds-val">' + dayData.time + '</div><div class="ds-label">用时</div></div>' +
            '</div>' +
            '<div class="day-narrative">' + narrativeHtml + '</div>' +
            '<div class="water-info ' + (dayData.water ? '' : 'no-water') + '">' +
                '💧 ' + dayData.waterNote +
            '</div>' +
            '<div class="danger-warning">' +
                '⚠️ ' + dayData.danger +
            '</div>';
    }
}

function initDangerMap() {
    var map = L.map('map-danger', {
        center: [34.045, 107.580],
        zoom: 11,
        zoomControl: true,
        attributionControl: false
    });

    var darkLayer = createTileLayer('dark');
    darkLayer.addTo(map);

    mapLayers.danger = {
        base: darkLayer,
        dark: darkLayer,
        terrain: createTileLayer('terrain'),
        currentBase: 'dark',
        accidents: L.layerGroup().addTo(map),
        climate: L.layerGroup(),
        terrainRisk: L.layerGroup(),
        route: null
    };

    var allPoints = AOTAI_DATA.keyPoints;
    addRouteToMap(map, allPoints, { color: 'rgba(100,116,139,0.4)', weight: 2, glowColor: null });

    AOTAI_DATA.accidents.forEach(function(acc) {
        var iconColor = acc.type === 'death' ? '#ef4444' : acc.type === 'missing' ? '#f59e0b' : '#3b82f6';
        var iconSymbol = acc.type === 'death' ? '✕' : acc.type === 'missing' ? '?' : '!';
        var typeLabel = acc.type === 'death' ? '遇难' : acc.type === 'missing' ? '失踪' : '事故';
        var typeCls = acc.type === 'death' ? 'danger' : 'peak';
        var marker = L.marker([acc.lat, acc.lng], {
            icon: L.divIcon({
                className: '',
                html: '<div class="accident-marker" style="background:' + iconColor + ';border-color:' + iconColor + '">' + iconSymbol + '</div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            })
        }).bindPopup(
            '<div class="popup-content">' +
            '<div class="popup-title" style="color:' + iconColor + '">' + acc.year + '年</div>' +
            '<span class="popup-type ' + typeCls + '">' + typeLabel + '</span>' +
            '<div class="popup-desc">' + acc.desc + '</div>' +
            '</div>'
        ).bindTooltip(acc.year + '年 · ' + typeLabel, { className: 'map-tooltip' });
        marker.addTo(mapLayers.danger.accidents);
    });

    AOTAI_DATA.climateZones.forEach(function(zone) {
        L.circle([zone.lat, zone.lng], {
            radius: zone.radius,
            color: zone.border,
            fillColor: zone.color,
            fillOpacity: 0.5,
            weight: 1.5,
            dashArray: '8 4'
        }).bindPopup(
            '<div class="popup-content">' +
            '<div class="popup-title">' + zone.name + '</div>' +
            '<div class="popup-desc">' + zone.desc + '</div>' +
            '</div>'
        ).addTo(mapLayers.danger.climate);
    });

    AOTAI_DATA.dangerZones.forEach(function(zone) {
        var color = zone.level === 'extreme' ? '#ef4444' : '#f59e0b';
        var fillColor = zone.level === 'extreme' ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.12)';
        L.circle([zone.lat, zone.lng], {
            radius: zone.radius,
            color: color,
            fillColor: fillColor,
            fillOpacity: 0.7,
            weight: 2,
            dashArray: '4 3'
        }).bindPopup(
            '<div class="popup-content">' +
            '<div class="popup-title" style="color:' + color + '">' + zone.name + '</div>' +
            '<span class="popup-type danger">' + (zone.level === 'extreme' ? '极危险' : '高危险') + '</span>' +
            '<div class="popup-desc">' + zone.desc + '</div>' +
            '</div>'
        ).addTo(mapLayers.danger.terrainRisk);
    });

    maps.danger = map;
}

function initGeoMap() {
    var map = L.map('map-geo', {
        center: [34.020, 107.620],
        zoom: 11,
        zoomControl: true,
        attributionControl: false
    });

    var terrainLayer = createTileLayer('terrain');
    var darkLayer = createTileLayer('dark');
    terrainLayer.addTo(map);

    mapLayers.geo = {
        base: terrainLayer,
        dark: darkLayer,
        currentBase: 'terrain',
        geoFeatures: L.layerGroup()
    };

    var allPoints = AOTAI_DATA.keyPoints;
    addRouteToMap(map, allPoints, { color: 'rgba(100,116,139,0.4)', weight: 2, glowColor: null });

    AOTAI_DATA.geoFeatures.forEach(function(feature) {
        L.circle([feature.lat, feature.lng], {
            radius: feature.radius,
            color: feature.color,
            fillColor: feature.color,
            fillOpacity: 0.12,
            weight: 2,
            dashArray: '6 4'
        }).bindPopup(
            '<div class="popup-content">' +
            '<div class="popup-title" style="color:' + feature.color + '">' + feature.name + '</div>' +
            '<div class="popup-desc">' + feature.desc + '</div>' +
            '</div>'
        ).addTo(map);

        L.marker([feature.lat, feature.lng], {
            icon: L.divIcon({
                className: '',
                html: '<div class="geo-label" style="color:' + feature.color + ';border-color:' + feature.color + '">' + feature.name + '</div>',
                iconSize: [80, 22],
                iconAnchor: [40, -8]
            })
        }).addTo(map);
    });

    var verticalZones = [
        { name: '落叶阔叶林 <2000m', lat: 34.0230, lng: 107.4380, color: '#27ae60' },
        { name: '针阔混交林 2000-2600m', lat: 34.0285, lng: 107.4550, color: '#2ecc71' },
        { name: '亚高山针叶林 2600-3200m', lat: 34.0325, lng: 107.4750, color: '#1abc9c' },
        { name: '高山灌丛草甸 3200-3500m', lat: 34.0400, lng: 107.5300, color: '#f39c12' },
        { name: '高山寒冻带 >3500m', lat: 34.0500, lng: 107.6000, color: '#e74c3c' }
    ];

    verticalZones.forEach(function(zone) {
        L.marker([zone.lat, zone.lng], {
            icon: L.divIcon({
                className: '',
                html: '<div class="zone-marker" style="background:' + zone.color + ';border-color:' + zone.color + '"><span>' + zone.name + '</span></div>',
                iconSize: [160, 28],
                iconAnchor: [80, 14]
            })
        }).addTo(map);
    });

    var keyGeoPoints = allPoints.filter(function(p) {
        return p.type === 'peak' || p.type === 'end' || p.name.indexOf('海') >= 0 || p.name.indexOf('池') >= 0;
    });
    addMarkersToMap(map, keyGeoPoints, { fitBounds: false });

    maps.geo = map;
}

function initClimateMap() {
    var map = L.map('map-climate', {
        center: [34.040, 107.580],
        zoom: 10,
        zoomControl: true,
        attributionControl: false
    });

    var terrainLayer = createTileLayer('terrain');
    var darkLayer = createTileLayer('dark');
    terrainLayer.addTo(map);

    mapLayers.climate = {
        base: terrainLayer,
        dark: darkLayer,
        currentBase: 'terrain'
    };

    AOTAI_DATA.climateZones.forEach(function(zone) {
        L.circle([zone.lat, zone.lng], {
            radius: zone.radius,
            color: zone.border,
            fillColor: zone.color,
            fillOpacity: 0.8,
            weight: 2,
            dashArray: '8 4'
        }).bindPopup(
            '<div class="popup-content">' +
            '<div class="popup-title" style="color:' + zone.border + '">' + zone.name + '</div>' +
            '<div class="popup-desc">' + zone.desc + '</div>' +
            '</div>'
        ).bindTooltip(zone.name, { className: 'map-tooltip' }).addTo(map);
    });

    addMarkersToMap(map, AOTAI_DATA.keyPoints.filter(function(p) { return p.type === 'peak'; }), { fitBounds: true });

    maps.climate = map;
}

function initBanMap() {
    var map = L.map('map-ban', {
        center: [34.040, 107.580],
        zoom: 10,
        zoomControl: true,
        attributionControl: false
    });

    var darkLayer = createTileLayer('dark');
    var terrainLayer = createTileLayer('terrain');
    darkLayer.addTo(map);

    mapLayers.ban = {
        base: darkLayer,
        terrain: terrainLayer,
        currentBase: 'dark'
    };

    var allPoints = AOTAI_DATA.keyPoints;
    addRouteToMap(map, allPoints, { color: '#ef4444', weight: 3, glowColor: 'rgba(239,68,68,0.2)', glowWeight: 10, dashArray: '10 6' });

    L.circle([34.040, 107.580], {
        radius: 18000,
        color: '#ef4444',
        fillColor: 'rgba(239,68,68,0.05)',
        fillOpacity: 0.5,
        weight: 2,
        dashArray: '12 6'
    }).bindPopup(
        '<div class="popup-content">' +
        '<div class="popup-title" style="color:#ef4444">禁止穿越区域</div>' +
        '<span class="popup-type danger">核心保护区</span>' +
        '<div class="popup-desc">太白山国家级自然保护区核心区，2018年起全面禁止鳌太穿越，违者罚款最高5000元</div>' +
        '</div>'
    ).bindTooltip('禁止穿越区域', { className: 'map-tooltip' }).addTo(map);

    var patrolPoints = [
        { lat: 34.0230, lng: 107.4380, name: '塘口村检查站' },
        { lat: 34.0600, lng: 107.5900, name: '跑马梁巡逻点' },
        { lat: 33.9576, lng: 107.7612, name: '大爷海保护站' },
        { lat: 34.0500, lng: 107.4800, name: '鳌山入口检查点' }
    ];

    patrolPoints.forEach(function(pt) {
        L.marker([pt.lat, pt.lng], {
            icon: L.divIcon({
                className: '',
                html: '<div class="patrol-marker">🚫</div>',
                iconSize: [28, 28],
                iconAnchor: [14, 14]
            })
        }).bindPopup(
            '<div class="popup-content">' +
            '<div class="popup-title" style="color:#ef4444">' + pt.name + '</div>' +
            '<span class="popup-type danger">执法检查点</span>' +
            '<div class="popup-desc">24小时值守，节假日重点巡查</div>' +
            '</div>'
        ).bindTooltip(pt.name, { className: 'map-tooltip' }).addTo(map);
    });

    addMarkersToMap(map, allPoints.filter(function(p) { return p.type === 'start' || p.type === 'end'; }), { fitBounds: true });

    L.marker([34.040, 107.580], {
        icon: L.divIcon({
            className: '',
            html: '<div class="ban-label">⛔ 禁止穿越区域</div>',
            iconSize: [140, 30],
            iconAnchor: [70, 15]
        })
    }).addTo(map);

    maps.ban = map;
}

function switchBaseLayer(map, mapConfig, layerType) {
    map.eachLayer(function(l) {
        if (l instanceof L.TileLayer) map.removeLayer(l);
    });
    mapConfig.currentBase = layerType;
    if (layerType === 'dark') {
        mapConfig.dark.addTo(map);
    } else if (layerType === 'terrain') {
        mapConfig.terrain.addTo(map);
    }
}

function setupMapControls() {
    document.querySelectorAll('.map-ctrl-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var layer = btn.dataset.layer;
            var mapId = btn.dataset.map;
            var siblings = btn.parentElement.querySelectorAll('.map-ctrl-btn');
            var isActive = btn.classList.contains('active');

            if (isActive) {
                btn.classList.remove('active');
            } else {
                siblings.forEach(function(s) { s.classList.remove('active'); });
                btn.classList.add('active');
            }

            // 01 概览地图
            if (mapId === 'overview') {
                var map = maps.overview;
                if (!map) return;
                var cfg = mapLayers.overview;
                if (!cfg) return;

                if (layer === 'dark') {
                    switchBaseLayer(map, cfg, 'dark');
                } else if (layer === 'satellite') {
                    switchBaseLayer(map, cfg, 'terrain');
                } else if (layer === 'danger') {
                    if (!isActive) {
                        cfg.danger.addTo(map);
                    } else {
                        map.removeLayer(cfg.danger);
                    }
                }
            }

            // 02 每日路线地图
            if (mapId === 'day') {
                var map = maps.day;
                if (!map) return;
                var cfg = mapLayers.day;
                if (!cfg) return;

                if (layer === 'base') {
                    switchBaseLayer(map, cfg, 'dark');
                } else if (layer === 'satellite') {
                    switchBaseLayer(map, cfg, 'terrain');
                }
            }

            // 03 危险事故地图
            if (mapId === 'danger') {
                var map = maps.danger;
                if (!map) return;
                var cfg = mapLayers.danger;
                if (!cfg) return;

                if (layer === 'dark') {
                    switchBaseLayer(map, cfg, 'dark');
                } else if (layer === 'terrain') {
                    switchBaseLayer(map, cfg, 'terrain');
                } else if (layer === 'accidents') {
                    if (!isActive) cfg.accidents.addTo(map);
                    else map.removeLayer(cfg.accidents);
                } else if (layer === 'climate') {
                    if (!isActive) cfg.climate.addTo(map);
                    else map.removeLayer(cfg.climate);
                } else if (layer === 'terrain-risk') {
                    if (!isActive) cfg.terrainRisk.addTo(map);
                    else map.removeLayer(cfg.terrainRisk);
                }
            }

            // 04 地质特征地图
            if (mapId === 'geo') {
                var map = maps.geo;
                if (!map) return;
                var cfg = mapLayers.geo;
                if (!cfg) return;

                if (layer === 'base') {
                    switchBaseLayer(map, cfg, 'terrain');
                } else if (layer === 'satellite') {
                    switchBaseLayer(map, cfg, 'dark');
                }
            }

            // 05 禁令地图
            if (mapId === 'ban') {
                var map = maps.ban;
                if (!map) return;
                var cfg = mapLayers.ban;
                if (!cfg) return;

                if (layer === 'base') {
                    switchBaseLayer(map, cfg, 'dark');
                } else if (layer === 'terrain') {
                    switchBaseLayer(map, cfg, 'terrain');
                }
            }
        });
    });
}

function setupDayTabs() {
    document.querySelectorAll('.day-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.day-tab').forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            var day = parseInt(tab.dataset.day);
            currentDay = day;
            updateDayMap(day);
            updateDayProgressBar(day);
        });
    });
}

function updateDayProgressBar(day) {
    var segments = document.querySelectorAll('#dayProgressBar .dpb-segment');
    segments.forEach(function(seg, i) {
        seg.classList.remove('completed', 'current');
        if (i < day - 1) seg.classList.add('completed');
        else if (i === day - 1) seg.classList.add('current');
    });
}

function setupSideNav() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var target = link.dataset.target;
            var el = document.getElementById(target);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    var sections = ['hero', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5'];
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function(l) { l.classList.remove('active'); });
                var activeLink = document.querySelector('.nav-link[data-target="' + entry.target.id + '"]');
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

function setupScrollProgress() {
    var progressBar = document.querySelector('.progress-bar');
    if (!progressBar) return;

    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
        progressBar.style.width = scrollPercent + '%';
    });
}

function setupHeroAnimations() {
    var nums = document.querySelectorAll('.hs-num');
    nums.forEach(function(num) {
        var target = parseInt(num.dataset.target);
        var duration = 2000;
        var start = performance.now();

        function animate(currentTime) {
            var elapsed = currentTime - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            num.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                num.textContent = target;
            }
        }

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    requestAnimationFrame(animate);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(num);
    });
}

function setupChapterAnimations() {
    var chapterHeaders = document.querySelectorAll('.chapter-header');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    chapterHeaders.forEach(function(header) { observer.observe(header); });

    var contentPanels = document.querySelectorAll('.content-panel');
    var cpObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cpObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    contentPanels.forEach(function(panel) {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(20px)';
        panel.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cpObserver.observe(panel);
    });

    var mapPanels = document.querySelectorAll('.map-panel');
    var mpObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                mpObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    mapPanels.forEach(function(panel) {
        panel.style.opacity = '0';
        panel.style.transform = 'translateX(-20px)';
        panel.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        mpObserver.observe(panel);
    });
}

function drawElevationChart() {
    var canvas = document.getElementById('elevationCanvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;

    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = 180 * dpr;
    ctx.scale(dpr, dpr);

    var width = canvas.offsetWidth;
    var height = 180;
    var padding = { top: 20, right: 20, bottom: 30, left: 50 };
    var chartW = width - padding.left - padding.right;
    var chartH = height - padding.top - padding.bottom;

    var points = AOTAI_DATA.keyPoints;
    var maxAlt = 4000;
    var minAlt = 1500;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(100,116,139,0.15)';
    ctx.lineWidth = 1;
    for (var alt = 2000; alt <= 4000; alt += 500) {
        var y = padding.top + chartH - ((alt - minAlt) / (maxAlt - minAlt)) * chartH;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '11px "Noto Sans SC", sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(alt + 'm', padding.left - 8, y + 4);
    }

    var gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    gradient.addColorStop(0, 'rgba(6, 182, 212, 0.3)');
    gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.1)');
    gradient.addColorStop(1, 'rgba(6, 182, 212, 0.02)');

    ctx.beginPath();
    points.forEach(function(p, i) {
        var x = padding.left + (i / (points.length - 1)) * chartW;
        var py = padding.top + chartH - ((p.alt - minAlt) / (maxAlt - minAlt)) * chartH;
        if (i === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
    });
    ctx.lineTo(padding.left + chartW, height - padding.bottom);
    ctx.lineTo(padding.left, height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    points.forEach(function(p, i) {
        var x = padding.left + (i / (points.length - 1)) * chartW;
        var py = padding.top + chartH - ((p.alt - minAlt) / (maxAlt - minAlt)) * chartH;
        if (i === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
    });
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    points.forEach(function(p, i) {
        var x = padding.left + (i / (points.length - 1)) * chartW;
        var py = padding.top + chartH - ((p.alt - minAlt) / (maxAlt - minAlt)) * chartH;

        var dotColor = p.type === 'peak' || p.type === 'end' ? '#f59e0b' : p.type === 'danger' ? '#ef4444' : p.type === 'camp' ? '#10b981' : '#06b6d4';

        ctx.beginPath();
        ctx.arc(x, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
        ctx.strokeStyle = '#0a0e17';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (p.type === 'peak' || p.type === 'end' || p.type === 'start') {
            ctx.fillStyle = '#f0f4f8';
            ctx.font = 'bold 10px "Noto Sans SC", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(p.name, x, py - 10);
        }
    });

    ctx.fillStyle = '#64748b';
    ctx.font = '10px "Noto Sans SC", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('塘口村', padding.left, height - 8);
    ctx.fillText('鳌山', padding.left + chartW * 0.15, height - 8);
    ctx.fillText('太白梁', padding.left + chartW * 0.5, height - 8);
    ctx.fillText('跑马梁', padding.left + chartW * 0.7, height - 8);
    ctx.fillText('拔仙台', padding.left + chartW, height - 8);
}

function handleMapResize() {
    Object.keys(maps).forEach(function(key) {
        if (maps[key]) {
            maps[key].invalidateSize();
        }
    });
}

function setupInteractiveHints() {
    var hints = document.querySelectorAll('.interactive-hint');
    hints.forEach(function(hint) {
        setTimeout(function() {
            hint.style.transition = 'opacity 1s ease';
            hint.style.opacity = '0';
            setTimeout(function() {
                hint.style.display = 'none';
            }, 1000);
        }, 6000);
    });
}

function init() {
    try {
        initOverviewMap();
    } catch(e) {
        console.warn('Overview map init failed:', e);
    }

    try {
        initDayMap();
    } catch(e) {
        console.warn('Day map init failed:', e);
    }

    try {
        initDangerMap();
    } catch(e) {
        console.warn('Danger map init failed:', e);
    }

    try {
        initGeoMap();
    } catch(e) {
        console.warn('Geo map init failed:', e);
    }

    try {
        initBanMap();
    } catch(e) {
        console.warn('Ban map init failed:', e);
    }

    setupMapControls();
    setupDayTabs();
    setupSideNav();
    setupScrollProgress();
    setupHeroAnimations();
    setupChapterAnimations();
    setupInteractiveHints();

    setTimeout(function() {
        drawElevationChart();
        handleMapResize();
        updateDayProgressBar(1);
    }, 500);

    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            drawElevationChart();
            handleMapResize();
        }, 250);
    });

    var mapObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var mapId = entry.target.id;
                var mapKey = mapId.replace('map-', '');
                if (mapKey === 'overview') mapKey = 'overview';
                if (maps[mapKey]) {
                    setTimeout(function() {
                        maps[mapKey].invalidateSize();
                    }, 200);
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.story-map').forEach(function(el) {
        mapObserver.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', init);
