import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable()
export class HelperService {
   constructor() {

   }
   saveToLocalStorage(key: string, value) {
    if (typeof value === 'object') {
        return localStorage.setItem(key, JSON.stringify(value));
    } else {
        return localStorage.setItem(key, value);
    }

   }
   getLocalStorage(key) {
    const savedStorage = localStorage.getItem(key);
    return JSON.parse(savedStorage);
   }
   regexGetParamFromString(str, param) {
        const rx = new RegExp('[#?&]' + param + '=([^&]+).*$');
        const matches = rx.exec(str);
        if (matches) {
            return matches[1];
        }
   }
   sum = a => {
       return a.reduce((x, y) => x + y, 0);
   }
   splitStreamsAudioVideo = (probeResult)  => {
    let video = [];
    let audio = [];
    if  (probeResult) {
    video = probeResult.streams.stream.filter(stream => stream.codecType === 'video');
    audio = probeResult.streams.stream.filter(stream => stream.codecType === 'audio');
    }
    audio.map(item => {
      if (item.tag) {
        item.language = item.tag[0]['value'];
      }
      item.id = `${item.id} (${parseInt(item.id, 16)})`;
      return item;
    });
    video.map(item => {
      item.resolution = `${item.width} x ${item.height}` ;
      return item;
    });
    return {
        audio,
        video
    };
   }
}
