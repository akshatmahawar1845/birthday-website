// Web Audio API synthesizer for cute interactive sounds and music box chimes
let audioCtx = null;

export function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  return audioCtx;
}

export function resumeAudioContext() {
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    return ctx.resume();
  }
  return Promise.resolve();
}

// Gentle pop sound
export function playPop(pitch = 520) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch {
    // Ignore audio errors
  }
}

// Sparkle / Celestial chime
export function playChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;

      const startTime = ctx.currentTime + idx * 0.06;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.65);
    });
  } catch {
    // Ignore audio errors
  }
}

// Gentle mistake sound (cute boop)
export function playBoop() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(260, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.17);
  } catch {
    // Ignore audio errors
  }
}

// Candle blow / gentle breeze sound
export function playBreeze() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const bufferSize = ctx.sampleRate * 0.4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(200, ctx.currentTime + 0.4);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  } catch {
    // Ignore audio errors
  }
}

// Anime slash / whoosh effect
export function playSlash() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.22);

    gain.gain.setValueAtTime(0.14, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.23);
  } catch {
    // Ignore audio errors
  }
}

// Cute Music Box / Celeste Player
class MusicBox {
  constructor() {
    this.isPlaying = false;
    this.userMuted = false;
    this.timer = null;
    this.step = 0;
    this.masterGain = null;
    this.melody = [
      { note: 392.00, dur: 1 },
      { note: 392.00, dur: 1 },
      { note: 440.00, dur: 2 },
      { note: 392.00, dur: 2 },
      { note: 523.25, dur: 2 },
      { note: 493.88, dur: 4 },

      { note: 392.00, dur: 1 },
      { note: 392.00, dur: 1 },
      { note: 440.00, dur: 2 },
      { note: 392.00, dur: 2 },
      { note: 587.33, dur: 2 },
      { note: 523.25, dur: 4 },

      { note: 392.00, dur: 1 },
      { note: 392.00, dur: 1 },
      { note: 783.99, dur: 2 },
      { note: 659.25, dur: 2 },
      { note: 523.25, dur: 2 },
      { note: 493.88, dur: 2 },
      { note: 440.00, dur: 3 },

      { note: 698.46, dur: 1 },
      { note: 698.46, dur: 1 },
      { note: 659.25, dur: 2 },
      { note: 523.25, dur: 2 },
      { note: 587.33, dur: 2 },
      { note: 523.25, dur: 4 },
      { note: 0, dur: 2 },
    ];
  }

  getMasterGain(ctx) {
    if (!this.masterGain) {
      this.masterGain = ctx.createGain();
      this.masterGain.connect(ctx.destination);
    }
    return this.masterGain;
  }

  playNote(freq) {
    if (freq === 0 || this.userMuted || !this.isPlaying) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || ctx.state === 'suspended') return;
      const master = this.getMasterGain(ctx);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(master);
      osc.start();
      osc.stop(ctx.currentTime + 1.25);
    } catch {
      // Ignore audio errors
    }
  }

  start() {
    if (this.userMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.step = 0;
    }

    const beginPlayback = () => {
      if (!this.isPlaying || this.userMuted) return;
      const master = this.getMasterGain(ctx);
      master.gain.setValueAtTime(1, ctx.currentTime);
      if (!this.timer) this.tick();
    };

    if (ctx.state === 'suspended') {
      ctx.resume().then(beginPlayback).catch(() => {
        this.isPlaying = false;
      });
    } else {
      beginPlayback();
    }
  }

  tick() {
    if (!this.isPlaying || this.userMuted) return;
    const current = this.melody[this.step];
    if (current && current.note > 0) {
      this.playNote(current.note);
    }
    const beatMs = 280;
    const delay = (current ? current.dur : 1) * beatMs;

    this.timer = setTimeout(() => {
      if (!this.isPlaying || this.userMuted) return;
      this.step = (this.step + 1) % this.melody.length;
      this.tick();
    }, delay);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    const ctx = getAudioContext();
    if (ctx && this.masterGain) {
      try {
        this.masterGain.gain.cancelScheduledValues(0);
        this.masterGain.gain.setValueAtTime(0, ctx.currentTime);
      } catch {
        // Ignore
      }
    }
  }

  mute() {
    this.userMuted = true;
    this.stop();
  }

  unmute() {
    this.userMuted = false;
    const ctx = getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().then(() => this.start()).catch(() => {});
    } else {
      this.start();
    }
  }

  toggle() {
    if (this.isPlaying && !this.userMuted) {
      this.mute();
      return false;
    } else {
      this.unmute();
      return true;
    }
  }
}

export const musicBox = new MusicBox();
