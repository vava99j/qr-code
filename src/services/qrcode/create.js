import {promptQrCode} from '../../prompts/prompt-qrcode.js';
import prompt from 'prompt';
import { handle } from './handle.js';

async function creadeQrCode() {
    prompt.get(promptQrCode, handle)
    prompt.start();
}

export {creadeQrCode}