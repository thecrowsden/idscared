/*
by The Crow's Den
v1.1
*/

let scale = {
	preview: 4,
	icon: 12,
	sign: 6,
}

const div = {
	hidden_preload_images: document.getElementById("div_hidden_preload_images"),
	css_unloaded: document.getElementById("div_css_unloaded"),
	unloaded: document.getElementById("div_unloaded"),
	css_loadprotect: document.getElementById("div_css_loadprotect"),
	loadprotect: document.getElementById("div_loadprotect"),
	header: document.getElementById("div_header"),
	antipiracy: document.getElementById("div_antipiracy"),
	wrongfile: document.getElementById("div_wrongfile"),
	devloader: document.getElementById("div_devloader"),
	idmaker: document.getElementById("div_idmaker"),
	preview: document.getElementById("div_preview"),
	preview_pixelfix: document.getElementById("div_preview_pixelfix"),
	icon: document.getElementById("div_icon"),
	sign: document.getElementById("div_sign"),
	sign_text: document.getElementById("div_sign_text"),
	sign_text_info: document.getElementById("div_sign_text_info"),
	sign_warning: document.getElementById("div_sign_warning"),
	sign_bad_text: document.getElementById("div_sign_bad_text"),
	sign_special_text: document.getElementById("div_sign_special_text"),
	sign_draw: document.getElementById("div_sign_draw"),
	exporter: document.getElementById("div_exporter"),
	reference: document.getElementById("div_reference"),
}

const canvas = {
	id: document.getElementById("canvas_id"),
	preview: document.getElementById("canvas_preview"),
	icon: document.getElementById("canvas_icon"),
	sign: document.getElementById("canvas_sign"),
}

const c = {
	id: canvas.id.getContext("2d"),
	preview: canvas.preview.getContext("2d"),
	icon: canvas.icon.getContext("2d"),
	sign: canvas.sign.getContext("2d"),
}

const img = {
	ERROR: document.getElementById("img_ERROR"),
	icon: {
		bg: document.getElementById("img_icon_bg"),
		fg: document.getElementById("img_icon_fg"),
		template: document.getElementById("img_icon_template"),
	},
	unset: {
		sign: {
			bg: document.getElementById("img_ERROR"),
			fg: document.getElementById("img_ERROR"),
			template: document.getElementById("img_ERROR"),
		},
		template: document.getElementById("img_ERROR"),
	},
	vip: {
		sign: {
			bg: document.getElementById("img_vip_sign_bg"),
			fg: document.getElementById("img_vip_sign_fg"),
			template: document.getElementById("img_vip_sign_template"),
		},
		template: document.getElementById("img_vip_template"),
	},
	worker: {
		sign: {
			bg: document.getElementById("img_worker_sign_bg"),
			fg: document.getElementById("img_worker_sign_fg"),
			template: document.getElementById("img_worker_sign_template"),
		},
		template: document.getElementById("img_worker_template"),
		template_pixelfix: document.getElementById("img_worker_template_pixelfix"),
	},
}

const input = {
	file: {
		id: document.getElementById("input_file_id"),
	},
	zoom: {
		preview: document.getElementById("input_zoom_preview"),
		icon: document.getElementById("input_zoom_icon"),
		sign: document.getElementById("input_zoom_sign"),
	},
	size: {
		icon: document.getElementById("input_size_icon"),
		sign: document.getElementById("input_size_sign"),
	},
	btn: {
		icon: {
			fg: document.getElementById("input_button_icon_fg"),
			bg: document.getElementById("input_button_icon_bg"),
		},
		sign: {
			fg: document.getElementById("input_button_sign_fg"),
			bg: document.getElementById("input_button_sign_bg"),
		},
	},
	txt: {
		name: document.getElementById("input_text_name"),
		info: document.getElementById("input_text_info"),
	},
	bool: {
		sign_draw: document.getElementById("input_bool_sign_draw"),
		pixelfix: document.getElementById("input_bool_pixelfix"),
	},
}

const color = {
	bg: "bg",
	fg: "fg",
	template: "template",
}

const pen_target = {
	icon: "icon",
	sign: "sign",
}

const id_types = [
	"vip",
	"worker",
]

const id_type = {
	unset: "unset",
	vip: "vip",
	worker: "worker",
}

const id_colormap = {
	unset: {
		bg: "magenta",
		fg: "magenta",
	},
	vip: {
		bg: "white",
		fg: "black",
	},
	worker: {
		bg: "black",
		fg: "white",
	},
}

const id_coords = {
	unset: {
		icon: {
			x: 0,
			y: 0,
			width: 1,
			height: 1,
		},
		sign: {
			x: 0,
			y: 0,
			width: 1,
			height: 1,
		},
		sign_name: {
			x: 0,
			y: 0,
			width: 0,
		},
		sign_info: {
			x: 0,
			y: 0,
			width: 0,
		},
	},
	vip: {
		icon: {
			x: 76,
			y: 31,
			width: 41,
			height: 37,
		},
		sign: {
			x: 4,
			y: 68,
			width: 119,
			height: 48,
		},
		sign_name: {
			x: 5,
			y: 11,
			width: 114,
		},
		sign_info: {
			x: 5,
			y: 30,
			width: 114,
		},
	},
	worker: {
		icon: {
			x: 7,
			y: 32,
			width: 41,
			height: 37,
		},
		sign: {
			x: 43,
			y: 72,
			width: 84,
			height: 28,
		},
		sign_name: {
			x: 1,
			y: 9,
			width: 83,
		},
		sign_info: {
			x: 0,
			y: 0,
			width: 0,
		},
	},
}

const languages = [
	"en",
	"it",
	"ptbr",
	"ru",
	"fr",
	"de",
]

const language = {
	unset: "unset",
	en: "en",
	it: "it",
	ptbr: "ptbr",
	ru: "ru",
	fr: "fr",
	de: "de",
}

const id_name = {
	vip: {
		unset: "ERROR",
		en: "VIP badge",
		it: "Badge VIP",
		ptbr: "Crachá VIP",
		ru: "VIP-пропуск",
		fr: "Badge VIP",
		de: "VIP-Ausweis",
	},
	worker: {
		unset: "ERROR",
		en: "Worker card",
		it: "Card lavoratore",
		ptbr: "Cartão de trabalhador",
		ru: "Карта рабочего",
		fr: "Carte de Travail",
		de: "Arbeiterkarte",
	},
	unset: {
		unset: "ERROR",
		en: "ERROR",
		it: "ERROR",
		ptbr: "ERROR",
		ru: "ERROR",
		fr: "ERROR",
		de: "ERROR",
	},
}

let user_id_type = id_type.unset;
let user_language = language.unset;

let pixelfix = false;

let pen = {
	icon: {
		down: false,
		color: color.fg,
		size: 1,
	},
	sign: {
		down: false,
		color: color.fg,
		size: 1,
	},
}

let sign_draw = false;
let sign_bad_text = false;
let sign_special_text = false;

function try_clear_file_input() {
	try {
		input.file.id.value = null;
	} catch(ex) {}
}

function restore_defaults() {
	input.bool.sign_draw.checked = false;
	update_sign_draw_state();
	input.bool.pixelfix.checked = false;
	pixelfix = false;
	input.zoom.preview.value = 4;
	input.zoom.icon.value = 12;
	input.zoom.sign.value = 6;
	input.size.icon.value = 1;
	input.size.sign.value = 1;
	input.txt.name.value = "";
	input.txt.info.value = "";
	sign_warning_set(false);
	sign_bad_text = false;
	sign_special_text = false;
	div.sign_bad_text.classList.add("hidden");
	div.sign_special_text.classList.add("hidden");
}

function update_scale() {
	scale.preview = input.zoom.preview.value;
	scale.icon = input.zoom.icon.value;
	scale.sign = input.zoom.sign.value;
	canvas.preview.style.width = canvas.preview.width * scale.preview + "px";
	canvas.icon.style.width = canvas.icon.width * scale.icon + "px";
	canvas.sign.style.width = canvas.sign.width * scale.sign + "px";
	canvas.preview.style.borderWidth = scale.preview + "px";
	canvas.icon.style.borderWidth = scale.icon + "px";
	canvas.sign.style.borderWidth = scale.sign + "px";
}

function show_references() {
	div.antipiracy.classList.add("hidden");
	div.reference.classList.remove("hidden");
	div.wrongfile.classList.add("hidden");
}

function hide_references() {
	try_clear_file_input()
	div.antipiracy.classList.remove("hidden");
	div.reference.classList.add("hidden");
	div.wrongfile.classList.add("hidden");
}

function dev_unlock() {
	div.devloader.classList.remove("hidden");
}

function check_file() {
	if (input.file.id.files[0]) {
		const filename = input.file.id.files[0].name.toLowerCase();
		if (filename == "dev") {
			dev_unlock()
		} else {
			let valid_id = false;
			for (const i of id_types) {
				for (const l of languages) {
					if (filename == id_name[i][l].toLowerCase() + ".png") {
						idmaker_setup(i, l);
						valid_id = true;
						break;
					}
				}
				if (valid_id) {
					break;
				}
			}
			if (!valid_id) {
				div.wrongfile.classList.remove("hidden");
			}
		}
	}
}

function idmaker_setup(type, lang) {
	user_id_type = type;
	user_language = lang;
	
	restore_defaults();
	c.id.drawImage(img[type].template, 0, 0);
	c.preview.drawImage(canvas.id, 0, 0);
	c.icon.drawImage(img.icon.template, 0, 0);
	canvas.sign.width = id_coords[type].sign.width;
	canvas.sign.height = id_coords[type].sign.height;
	c.sign.drawImage(img[type].sign.template, 0, 0);
	update_scale();
	
	canvas.preview.style.borderColor = id_colormap[user_id_type].bg;
	canvas.icon.style.borderColor = "white";
	canvas.sign.style.borderColor = id_colormap[user_id_type].fg;
	input.btn.sign.fg.classList.remove("button_" + id_colormap[type].bg);
	input.btn.sign.fg.classList.add("button_" + id_colormap[type].fg);
	input.btn.sign.bg.classList.remove("button_" + id_colormap[type].fg);
	input.btn.sign.bg.classList.add("button_" + id_colormap[type].bg);
	change_pen(pen_target.icon, color.fg);
	change_pen(pen_target.sign, color.fg);

	div.antipiracy.classList.add("hidden");
	if (type == id_type.vip) {
		div.preview_pixelfix.classList.add("hidden");
		div.sign_text_info.classList.remove("hidden");
	}
	if (type == id_type.worker) {
		div.preview_pixelfix.classList.remove("hidden");
		div.sign_text_info.classList.add("hidden");
	}
	div.idmaker.classList.remove("hidden");
}

function update_id() {
	if (pixelfix && user_id_type == id_type.worker) {
		c.id.drawImage(img.worker.template_pixelfix, 0, 0);
	} else {
		c.id.drawImage(img[user_id_type].template, 0, 0);
	}
	c.id.drawImage(canvas.icon, id_coords[user_id_type].icon.x, id_coords[user_id_type].icon.y);
	c.id.drawImage(canvas.sign, id_coords[user_id_type].sign.x, id_coords[user_id_type].sign.y);
	c.preview.drawImage(canvas.id, 0, 0);
}

function update_pixelfix() {
	pixelfix = input.bool.pixelfix.checked;
	update_id();
}

function change_pen(input_pen_target, input_pen_color) {
	pen[input_pen_target].color = input_pen_color;
	if (input_pen_color == color.fg) {
		input.btn[input_pen_target].fg.disabled = true;
		input.btn[input_pen_target].bg.disabled = false;
	} else if (input_pen_color == color.bg) {
		input.btn[input_pen_target].fg.disabled = false;
		input.btn[input_pen_target].bg.disabled = true;
	}
}

function update_pen_size() {
	pen.icon.size = input.size.icon.value;
	pen.sign.size = input.size.sign.value;
}

function reset_icon() {
	c.icon.drawImage(img.icon.template, 0, 0);
	update_id();
}

function clear_icon() {
	c.icon.drawImage(img.icon.bg, 0, 0);
	update_id();
}

function reset_sign() {
	c.sign.drawImage(img[user_id_type].sign.template, 0, 0);
	sign_warning_set(false);
	update_text();
	update_id();
}

function clear_sign() {
	c.sign.drawImage(img[user_id_type].sign.bg, 0, 0);
	sign_warning_set(false);
	update_text();
	update_id();
}

function draw_pixel(destination, source, x, y) {
	destination.drawImage(source, x, y, 1, 1, x, y, 1, 1);
	update_id();
}

function draw(destination, source, raw_x, raw_y, size) {
	switch (parseInt(size)) {
		case 2:
			draw_pixel(destination, source, Math.round(raw_x - 1), Math.round(raw_y - 1));
			draw_pixel(destination, source, Math.round(raw_x), Math.round(raw_y - 1));
			draw_pixel(destination, source, Math.round(raw_x - 1), Math.round(raw_y));
			draw_pixel(destination, source, Math.round(raw_x), Math.round(raw_y));
		break;
		case 3:
			draw_pixel(destination, source, Math.floor(raw_x), Math.floor(raw_y - 1));
			draw_pixel(destination, source, Math.floor(raw_x - 1), Math.floor(raw_y));
			draw_pixel(destination, source, Math.floor(raw_x), Math.floor(raw_y));
			draw_pixel(destination, source, Math.floor(raw_x + 1), Math.floor(raw_y));
			draw_pixel(destination, source, Math.floor(raw_x), Math.floor(raw_y + 1));
		break;
		case 4:
			draw_pixel(destination, source, Math.round(raw_x - 1), Math.round(raw_y - 2));
			draw_pixel(destination, source, Math.round(raw_x), Math.round(raw_y - 2));
			draw_pixel(destination, source, Math.round(raw_x - 2), Math.round(raw_y - 1));
			draw_pixel(destination, source, Math.round(raw_x - 1), Math.round(raw_y - 1));
			draw_pixel(destination, source, Math.round(raw_x), Math.round(raw_y - 1));
			draw_pixel(destination, source, Math.round(raw_x + 1), Math.round(raw_y - 1));
			draw_pixel(destination, source, Math.round(raw_x - 2), Math.round(raw_y));
			draw_pixel(destination, source, Math.round(raw_x - 1), Math.round(raw_y));
			draw_pixel(destination, source, Math.round(raw_x), Math.round(raw_y));
			draw_pixel(destination, source, Math.round(raw_x + 1), Math.round(raw_y));
			draw_pixel(destination, source, Math.round(raw_x - 1), Math.round(raw_y + 1));
			draw_pixel(destination, source, Math.round(raw_x), Math.round(raw_y + 1));
		break;
		default:
			draw_pixel(destination, source, Math.floor(raw_x), Math.floor(raw_y));
		break;
	}
	update_id();
}

function update_sign_draw_state() {
	sign_draw = input.bool.sign_draw.checked;
	if (sign_draw) {
		div.sign_text.classList.add("hidden");
		div.sign_draw.classList.remove("hidden");
		canvas.sign.classList.add("canvas_draw");
	} else {
		div.sign_text.classList.remove("hidden");
		div.sign_draw.classList.add("hidden");
		canvas.sign.classList.remove("canvas_draw");
	}
}

function sign_warning_set(input_state) {
	if (input_state) {
		div.sign_warning.classList.remove("hidden");
	} else {
		div.sign_warning.classList.add("hidden");
	}
}

function str_to_font(input_str) {
	let temp_array = Array.from(input_str);
	let output_array = [];
	for (let i of temp_array) {
		if (valid_chars.letters.includes(i)) {
			output_array.push(i.toUpperCase());
		} else if (valid_chars.numbers.includes(i)) {
			output_array.push(valid_chars.number_map[i]);
		} else if (i == " ") {
			output_array.push(valid_chars.special_map.SPACE);
		} else if (i == "(") {
			output_array.push(valid_chars.special_map.PARENTHESIS_OPEN);
		} else if (i == ")") {
			output_array.push(valid_chars.special_map.PARENTHESIS_CLOSED);
		} else if (i == "[") {
			output_array.push(valid_chars.special_map.BRACKET_OPEN);
		} else if (i == "]") {
			output_array.push(valid_chars.special_map.BRACKET_CLOSED);
		} else if (i == "#") {
			output_array.push(valid_chars.special_map.HASHTAG);
		} else if (i == "=") {
			output_array.push(valid_chars.special_map.SPECIAL_THIN_E);
			sign_special_text = true;
		} else if (i == ":") {
			output_array.push(valid_chars.special_map.SPECIAL_COLON);
			sign_special_text = true;
		} else if (i == "|") {
			output_array.push(valid_chars.special_map.SPECIAL_MINI_SPACE);
			sign_special_text = true;
		} else {
			sign_bad_text = true;
		}
	}
	return output_array;
}

function draw_font_char(destination, source, input_char, x, y) {
	for (let i = 0; i < font[input_char].mask.length; ++i) {
		for (let j = 0; j < font[input_char].mask[i].length; ++j) {
			if (font[input_char].mask[i][j]) {
				draw_pixel(destination, source, x + j, y + i);
			}
		}
	}
}

function draw_text(destination, source, input_text, x, y, width_cap) {
	let offset = 0;
	let input_text_arr = str_to_font(input_text);
	for (let i of input_text_arr) {
		if (offset + font[i].width < width_cap) {
			draw_font_char(destination, source, i, x + offset, y);
			offset += font[i].width;
		} else {
			break;
		}
	}
}
function update_text() {
	sign_bad_text = false;
	sign_special_text = false;
	c.sign.drawImage(img[user_id_type].sign.template, 0, 0);
	draw_text(c.sign, img[user_id_type].sign.fg, input.txt.name.value, id_coords[user_id_type].sign_name.x, id_coords[user_id_type].sign_name.y, id_coords[user_id_type].sign_name.width);
	if (user_id_type == id_type.vip) {
		draw_text(c.sign, img[user_id_type].sign.fg, input.txt.info.value, id_coords[user_id_type].sign_info.x, id_coords[user_id_type].sign_info.y, id_coords[user_id_type].sign_info.width);
	}
	sign_warning_set(false);
	if (sign_bad_text) {
		div.sign_bad_text.classList.remove("hidden");
	} else {
		div.sign_bad_text.classList.add("hidden");
	}
	if (sign_special_text) {
		div.sign_special_text.classList.remove("hidden");
	} else {
		div.sign_special_text.classList.add("hidden");
	}
	update_id();
}

function download_id() {
	let temp_link = document.createElement("a");
	temp_link.download = id_name[user_id_type][user_language] + ".png";
	canvas.id.toBlob((blob) => {
		temp_link.href = URL.createObjectURL(blob);
		temp_link.click();
	});
}

document.addEventListener("pointerup", () => {
	pen.icon.down = false;
	pen.sign.down = false;
});
canvas.icon.addEventListener("pointercancel", () => pen.icon.down = false);
canvas.sign.addEventListener("pointercancel", () => pen.sign.down = false);

canvas.icon.addEventListener("pointerdown", event => {
	if (event.button == 0) {
		pen.icon.down = true;
		draw(c.icon, img.icon[pen.icon.color], event.offsetX / scale.icon, event.offsetY / scale.icon, pen.icon.size);
	}
	event.preventDefault();
});
canvas.icon.addEventListener("pointermove", event => {
	if (pen.icon.down) {
		draw(c.icon, img.icon[pen.icon.color], event.offsetX / scale.icon, event.offsetY / scale.icon, pen.icon.size);
	}
	event.preventDefault();
});
canvas.sign.addEventListener("pointerdown", event => {
	if (sign_draw && event.button == 0) {
		pen.sign.down = true;
		draw(c.sign, img[user_id_type].sign[pen.sign.color], event.offsetX / scale.sign, event.offsetY / scale.sign, pen.sign.size);
		sign_warning_set(true);
	}
	event.preventDefault();
});
canvas.sign.addEventListener("pointermove", event => {
	if (pen.sign.down) {
		draw(c.sign, img[user_id_type].sign[pen.sign.color], event.offsetX / scale.sign, event.offsetY / scale.sign, pen.sign.size);
	}
	event.preventDefault();
});

const font = {
	SPACE: {
		width: 4,
		mask: [
			[false,false,false,false,],
			[false,false,false,false,],
			[false,false,false,false,],
			[false,false,false,false,],
			[false,false,false,false,],
			[false,false,false,false,],
			[false,false,false,false,],
			[false,false,false,false,],
		],
	},
	A: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
		],
	},
	B: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
		],
	},
	C: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
		],
	},
	D: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
		],
	},
	E: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
		],
	},
	F: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
		],
	},
	G: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
		],
	},
	H: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
		],
	},
	I: {
		width: 4,
		mask: [
			[false,false,false,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
		],
	},
	J: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
		],
	},
	K: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
		],
	},
	L: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
		],
	},
	M: {
		width: 12,
		mask: [
			[false,false,false,false,false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
		],
	},
	N: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
		],
	},
	O: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
		],
	},
	P: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
		],
	},
	Q: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
		],
	},
	R: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
		],
	},
	S: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
		],
	},
	T: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[false,false,true ,true ,true ,false,false,false,],
			[false,false,true ,true ,true ,false,false,false,],
			[false,false,true ,true ,true ,false,false,false,],
			[false,false,true ,true ,true ,false,false,false,],
			[false,false,true ,true ,true ,false,false,false,],
			[false,false,true ,true ,true ,false,false,false,],
		],
	},
	U: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
		],
	},
	V: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
		],
	},
	W: {
		width: 12,
		mask: [
			[false,false,false,false,false,false,false,false,false,false,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,],
		],
	},
	X: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
		],
	},
	Y: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[false,false,true ,true ,true ,false,false,false,],
			[false,false,true ,true ,true ,false,false,false,],
			[false,false,true ,true ,true ,false,false,false,],
		],
	},
	Z: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
		],
	},
	ZERO: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
		],
	},
	ONE: {
		width: 4,
		mask: [
			[false,false,false,false,],
			[true ,true ,true ,false,],
			[false,true ,true ,false,],
			[false,true ,true ,false,],
			[false,true ,true ,false,],
			[false,true ,true ,false,],
			[false,true ,true ,false,],
			[false,true ,true ,false,],
		],
	},
	TWO: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
		],
	},
	THREE: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[false,false,false,false,true ,true ,false,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,true ,true ,true ,true ,false,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
		],
	},
	FOUR: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
		],
	},
	FIVE: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
		],
	},
	SIX: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
		],
	},
	SEVEN: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
		],
	},
	EIGHT: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
			[false,true ,true ,false,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[false,true ,true ,false,true ,true ,false,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
		],
	},
	NINE: {
		width: 8,
		mask: [
			[false,false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[false,false,false,false,true ,true ,true ,false,],
			[true ,true ,true ,true ,true ,true ,false,false,],
		],
	},
	PARENTHESIS_OPEN: {
		width: 4,
		mask: [
			[false,false,false,false,],
			[false,true ,true ,true ,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[false,true ,true ,true ,],
		],
	},
	PARENTHESIS_CLOSED: {
		width: 4,
		mask: [
			[false,false,false,false,],
			[true ,true ,true ,false,],
			[false,true ,true ,true ,],
			[false,true ,true ,true ,],
			[false,true ,true ,true ,],
			[false,true ,true ,true ,],
			[false,true ,true ,true ,],
			[true ,true ,true ,false,],
		],
	},
	BRACKET_OPEN: {
		width: 4,
		mask: [
			[false,false,false,false,],
			[true ,true ,true ,true ,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,false,],
			[true ,true ,true ,true ,],
		],
	},
	BRACKET_CLOSED: {
		width: 4,
		mask: [
			[false,false,false,false,],
			[true ,true ,true ,true ,],
			[false,true ,true ,true ,],
			[false,true ,true ,true ,],
			[false,true ,true ,true ,],
			[false,true ,true ,true ,],
			[false,true ,true ,true ,],
			[true ,true ,true ,true ,],
		],
	},
	HASHTAG: {
		width: 8,
		mask: [
			[true ,true ,true ,true ,true ,true ,true ,true ,],
			[true ,false,false,false,false,false,false,true ,],
			[true ,false,false,false,false,false,false,true ,],
			[true ,false,false,false,false,false,false,true ,],
			[true ,false,false,false,false,false,false,true ,],
			[true ,false,false,false,false,false,false,true ,],
			[true ,false,false,false,false,false,false,true ,],
			[true ,true ,true ,true ,true ,true ,true ,true ,],
		],
	},
	SPECIAL_THIN_E: {
		width: 7,
		mask: [
			[false,false,false,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,false,],
			[true ,true ,true ,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,],
			[true ,true ,true ,true ,true ,false,false,],
			[true ,true ,true ,false,false,false,false,],
			[true ,true ,true ,false,false,false,false,],
			[false,true ,true ,true ,true ,true ,false,],
		],
	},
	SPECIAL_COLON: {
		width: 3,
		mask: [
			[false,false,false,],
			[true ,true ,false,],
			[true ,true ,false,],
			[false,false,false,],
			[false,false,false,],
			[false,false,false,],
			[true ,true ,false,],
			[true ,true ,false,],
		],
	},
	SPECIAL_MINI_SPACE: {
		width: 1,
		mask: [
			[false,],
			[false,],
			[false,],
			[false,],
			[false,],
			[false,],
			[false,],
			[false,],
		],
	},
}

const valid_chars = {
	letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",],
	numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",],
	number_map: ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE",],
	special_map: {
		SPACE: "SPACE",
		PARENTHESIS_OPEN: "PARENTHESIS_OPEN",
		PARENTHESIS_CLOSED: "PARENTHESIS_CLOSED",
		BRACKET_OPEN: "BRACKET_OPEN",
		BRACKET_CLOSED: "BRACKET_CLOSED",
		HASHTAG: "HASHTAG",
		SPECIAL_THIN_E: "SPECIAL_THIN_E",
		SPECIAL_COLON: "SPECIAL_COLON",
		SPECIAL_MINI_SPACE: "SPECIAL_MINI_SPACE",
	},
}

window.addEventListener("load", () => {
	const params = new URLSearchParams(document.location.search);
	if (id_types.includes(params.get("idtype"))) {
		if (languages.includes(params.get("language"))) {
			idmaker_setup(params.get("idtype"), params.get("language"));
		} else {
			idmaker_setup(params.get("idtype"), language.en);
		}
	} else {
		if (params.get("dev") != null) {
			dev_unlock();
		}
		if (params.get("info") != null) {
			show_references();
		}
	}
	try_clear_file_input()
	div.unloaded.classList.add("hidden");
	div.loadprotect.classList.remove("hidden");
});