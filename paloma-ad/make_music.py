import numpy as np, wave
sr=44100; dur=9.0
def pluck(f,length,sr=sr):
    n=int(sr*length); N=int(sr/f); buf=np.random.uniform(-1,1,N); out=np.zeros(n)
    for i in range(n):
        out[i]=buf[i%N]; buf[i%N]=0.4985*(buf[i%N]+buf[(i+1)%N])
    return out
# A frygická / "španělská kadence": Am - G - F - E, arpeggio
chords=[[220.0,261.63,329.63],[196.0,246.94,392.0],[174.61,261.63,349.23],[164.81,246.94,329.63]]
y=np.zeros(int(sr*(dur+2))); step=0.25; t=0.0; k=0
while t<dur:
    ch=chords[int(t//2.25)%4]
    pat=[0,1,2,1,2,1,2,1]
    f=ch[pat[k%8]]*(0.5 if k%8==0 else 1)
    s=pluck(f,1.2)*(1.0 if k%8==0 else 0.7)
    i=int(t*sr); y[i:i+len(s)]+=s[:len(y)-i]; t+=step; k+=1
y=y[:int(sr*dur)]
fade=np.minimum(1,np.minimum(np.arange(len(y))/(sr*1.0),(len(y)-np.arange(len(y)))/(sr*1.5)))
y=y*fade; y=y/np.abs(y).max()*0.8
w=wave.open('assets/espanol-guitar.wav','wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr)
w.writeframes((y*32767).astype(np.int16).tobytes()); w.close()
