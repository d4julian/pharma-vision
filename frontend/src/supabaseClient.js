import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yzvxeujdyyawikinlvfw.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_API_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
