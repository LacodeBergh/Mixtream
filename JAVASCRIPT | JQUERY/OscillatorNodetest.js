var context = new (window.AudioContext || window.webkitAudioContext)();

var oscillator = context.createOscillator();

oscillator.type = 'sine';
oscillator.frequency.value = 440;
oscillator.connect(context.destination);
oscillator.start();

var gain = context.createGain();
oscillator.connect(gain);
gain.connect(context.destination);

var now = context.currentTime;
gain.gain.setValueAtTime(1, now);
gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
oscillator.start(now);
oscillator.stop(now + 0.5);
